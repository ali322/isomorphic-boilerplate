import axios from 'axios'
import Index from "../../client/bundle/index/module/container.jsx"
import Error from "../../client/bundle/error/module/app.jsx"
import User from '../../client/bundle/user/module/container.jsx'
import { route, namespace, middleware,markupForComponent } from '../lib/util'
import log from '../middleware/log'
import test from '../middleware/test'
import other from '../middleware/other'

@middleware(log)
@namespace('')
export default new class {
    @middleware(test, other)
    @route({ type: 'get', url: '/test' })
    test(ctx) {
        ctx.body = 'im test'
    }

    @route({ url: '/' })
    async index(ctx, next) {
        let ret = []
        try {
            ret = await axios.get("https://api.github.com/events")
        } catch (err) {
            await next(err)
        }
        if (ret.status === 200) {
            let initialState = {
                flag: '6',
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
            await next(new Error('no evenets'))
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
                errMsg: 'repo not found'
            }
        }
    }

    @route({ url: '/user/:user' })
    async user(ctx, next) {
        const user = ctx.params.user
        const ret = await axios.get(`https://api.github.com/users/${user}`)
        if (ret.status === 200) {
            let initialState = {
                user: ret.data
            };
            let markup = markupForComponent(User, {
                initialState
            });
            await ctx.render("user", {
                markup,
                initialState
            });
        } else {
            await next(new Error('no user'))
        }
    }
}()

export async function errorHandler(ctx,next,err) {
    if (err) {
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
    } else {
        ctx.res.end()
    }
}

export async function notFoundHandler(ctx) {
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
