/**
 * @description 用于重命名PrPrCloud节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies: SSProxyType[]) {
  // 机场节点修饰前缀
  const prefix = '[prpr]'
  return proxies.map((proxy) => {
    proxy.name = `${prefix}-${proxy.name}`
    return proxy
  })
}
