/**
 * @description 用于重命名bityun节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const prefix = '[bit]'

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
function operator(proxies) {
  return proxies.map((p) => {
    p.name = prefix + p.name
    return p
  })
}
