export default async (ctx,next)=>{
    console.log('log started')
    await next()
}
