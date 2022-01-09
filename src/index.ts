import Koa from 'koa'
import Router from '@koa/router'
import Logger from 'koa-logger'

const router = new Router()
const app = new Koa()
app.use(Logger())

router.get('/', (ctx: Koa.Context, next: Koa.Next) => {
    console.log('/')
    ctx.body = '/'
})

router.get('/test', (ctx: Koa.Context, next: Koa.Next) => {
    console.log('get /test')
    ctx.body = '/test'
})

app.use(router.routes())
app.use(router.allowedMethods())

// logging
app.use(async (ctx: Koa.Context, next: Koa.Next) => {
    const start = Date.now()
    await next()
    const time = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${time}ms`)
});
  
app.listen(3000);