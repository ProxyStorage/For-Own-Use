/**
 * @description 用于重命名魔戒节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const mjPrefix = '[bit]'

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies) {
  return proxies.map((p) => {
    p.name = `${mjPrefix}${p.name}`
    return p
  })
}
