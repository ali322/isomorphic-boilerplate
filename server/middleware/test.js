export default async (ctx,next)=>{
    console.log('test passed')
    await next()
}
