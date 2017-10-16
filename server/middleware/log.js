export default async (ctx, next) => {
  const { method, url } = ctx
  const now = new Date().toISOString()
  // console.log(`${now} method: ${method},url: ${url}`)
  await next()
}
