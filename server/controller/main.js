import axios from 'axios'
import Index from "../../client/bundle/index/container.jsx"
import Error from "../../client/bundle/error/app.jsx"
import Detail from '../../client/bundle/detail/container.jsx'
import { route, namespace, middleware, markupForComponent } from '../lib/util'
import log from '../middleware/log'
import mark from '../middleware/mark'

@middleware(log)
@namespace('')
export default new class {
    @middleware(mark)
    @route({ method: 'get', path: '/todo' })
    test(ctx) {
        ctx.body = 'something need to do'
    }

    @route({ method: 'get', path: '/' })
    async index(ctx) {
        let ret
        try {
            ret = await axios.get("http://127.0.0.1:3000/mock/events")
        } catch (err) {
            throw err
        }
        if (ret.status === 200) {
            ret = ret.data
            let initialState = {
                flag: '1',
                events: ret.data
            };
            let markup = markupForComponent(Index, {
                initialState
            });
            await ctx.render("index", {
                markup,
                initialState
            });
        } else {
            throw new Error('no events')
        }
    }

    @route({ method: 'get', path: '/detail/:id' })
    async repo(ctx) {
        const id = ctx.params.id
        let ret
        try {
            ret = await axios.get(`http://127.0.0.1:3000/mock/event/${id}`)
        } catch (err) {
            throw err
        }
        if (ret.status === 200) {
            ret = ret.data
            let initialState = {
                detail: ret.data
            }
            let markup = markupForComponent(Detail, {
                initialState
            })
            await ctx.render("detail", {
                markup,
                initialState
            })
        } else {
            throw new Error('no event')
        }
    }
}()

export async function error(ctx, next) {
    try {
        await next()
    } catch (err) {
        let initialState = {
            msg: err.message
        }
        let markup = markupForComponent(Error, {
            initialState
        })
        await ctx.render('error', {
            markup,
            initialState
        })
    }
}

export async function notFound(ctx) {
    let initialState = {
        msg: "page not found"
    }
    let markup = markupForComponent(Error, {
        initialState
    })
    await ctx.render('error', {
        markup,
        initialState
    })
}
