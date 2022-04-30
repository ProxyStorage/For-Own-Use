/**
 * @description 用于重命名bityun节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const bitPrefix = '[bit]'

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies) {
  return proxies.map((p) => {
    p.name = `${bitPrefix}${p.name}`
    return p
  })
}
