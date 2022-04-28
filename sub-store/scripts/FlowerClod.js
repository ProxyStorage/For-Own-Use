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
    p.name = p.name.replace(' IEPL 中继 ', ' ')
    p.name = replaceLocation(p.name)
    p.name = prefix + p.name
    return p
  })
}

/**
 * 替换地区
 * @param {string} name
 */
function replaceLocation(name) {
  let resultName = name
  if (name.match(/香港/)) {
    resultName = name.replace('香港', 'HK ')
  } else if (name.match(/台湾/)) {
    resultName = name.replace('台湾', 'TW ')
  } else if (name.match(/日本/)) {
    resultName = name.replace('日本', 'JP ')
  } else if (name.match(/韩国/)) {
    resultName = name.replace('韩国', 'KR ')
  } else if (name.match(/新加坡/)) {
    resultName = name.replace('新加坡', 'SG ')
  } else if (name.match(/美国/)) {
    resultName = name.replace('美国', 'US ')
  } else {
    resultName = name
  }
  return resultName
}
