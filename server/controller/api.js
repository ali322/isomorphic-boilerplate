import axios from 'axios'
import { route, namespace, middleware } from '../lib/util'
import log from '../middleware/log'
import test from '../middleware/test'
import other from '../middleware/other'

@middleware(log)
@namespace('/api')
export default new class {
    @middleware(test, other)
    @route({ type: 'get', url: '/test' })
    test(ctx) {
        ctx.body = 'im test'
    }

    @route({ url: '/events' })
    async events(ctx) {
        const ret = await axios.get("https://api.github.com/events")
        if (ret.length > 0) {
            ctx.body = {
                isFetched: true,
                events: ret
            }
        } else {
            ctx.body = {
                isFetched: false,
                events: []
            }
        }
    }

    @route({ url: '/repo/:repo' })
    async repo(ctx) {
        const ret = await axios.get(`https://api.github.com/events`)
        if (ret.status === 200) {
            ctx.body = {
                isFetched: true,
                result: ret.data
            }
        } else {
            ctx.body = {
                isFetched: false,
                errMsg: ret.errMsg
            }
        }
    }

    @route({ url: '/user/:user' })
    async user(ctx) {
        const user = ctx.params.user
        const ret = await axios.get(`https://api.github.com/users/${user}`)
        if (ret.status === 200) {
            ctx.body = {
                isFetched: true,
                result: ret.data
            }
        } else {
            ctx.body = {
                isFetched: false,
                errMsg: 'user not found'
            }
        }
    }
}()
