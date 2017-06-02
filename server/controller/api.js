import axios from 'axios'
import { route, namespace, middleware, markupForComponent } from '../lib/util'
import log from '../middleware/log'

@middleware(log)
@namespace('/mock')
export default new class {
    @route({ method: 'get', path: '/detail/:id' })
    async detail(ctx) {
        const id = ctx.params.id
        let ret
        try {
            ret = await axios.get(`http://127.0.0.1:3000/mock/event/${id}`)
        } catch (err) {
            ctx.body = {
                status: 'error',
                errMsg: err.message
            }
            throw err
        }
        if (ret.status === 200) {
            ret = ret.data
            ctx.body = {
                status: 'ok',
                detail: ret.data
            }
        } else {
            ctx.body = {
                status: 'error',
                errMsg: 'no event'
            }
        }
    }
}()
