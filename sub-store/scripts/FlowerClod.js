/**
 * @description 用于重命名花云节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const prefix = '[Flower]'

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
function operator(proxies) {
  return proxies.map((p) => {
    p.name = prefix + p.name
    p.name = p.name.replace(' IEPL 中继 ', ' ')
    return p
  })
}
