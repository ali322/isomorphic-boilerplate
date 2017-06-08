export default async (ctx,next)=>{
    console.log('task marked')
    await next()
}
