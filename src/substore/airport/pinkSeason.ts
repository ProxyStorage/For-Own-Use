/**
 * @description 用于重命名pinkSeason节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const psPrefix = '[ps]'

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies: SSProxyType[]) {
  return proxies.map((p) => {
    if (p.name.includes('蜜桃四季春')) {
      p.name = `HK${p.name}`
    }
    p.name = `${psPrefix}${p.name}`
    return p
  })
}
