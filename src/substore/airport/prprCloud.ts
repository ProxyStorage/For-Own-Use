/**
 * @description 用于重命名PrPrCloud节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */
// 机场节点修饰前缀
const prprPrefix = '[prpr]'
/**
 * 入口函数
 * @param {{SSProxyType[]}} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies: SSProxyType[]) {
  return proxies.map((proxy) => {
    proxy.name = `${prprPrefix}${proxy.name}`
    return proxy
  })
}
