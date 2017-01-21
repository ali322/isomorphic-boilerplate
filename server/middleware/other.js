export default async (ctx,next)=>{
    console.log('other started')
    await next()
}
