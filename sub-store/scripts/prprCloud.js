/**
 * @description 用于重命名PrPrCloud节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const prefix = '[prpr]'

// 正则表达式
const regex = {
  hk: /港|HK|Hong/,
  tw: /台|TW|Tai/,
  jp: /日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan/,
  kr: /KR|Korea|KOR|首尔|韩|韓|春川/,
  sg: /新加坡|坡|狮城|SG|Singapore/,
  us: /美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States/,
  special: /特殊|福利|实验/,
  number: /\d+/
}

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
function operator(proxies) {
  return proxies.map((p) => {
    p.name = reName(p.name)
    return p
  })
}

/**
 * 节点重命名
 * @param {string} name 节点名称
 * @returns {string}
 */
function reName(name) {
  let resultName = name
  const number = name.match(regex.number) ? name.match(regex.number)[0] : ''
  if (name.match(regex.hk)) {
    resultName = prefix + `HK ${number}`
  } else if (name.match(regex.tw)) {
    resultName = prefix + `TW ${number}`
  } else if (name.match(regex.jp)) {
    resultName = prefix + `JP ${number}`
  } else if (name.match(regex.kr)) {
    resultName = prefix + `KR ${number}`
  } else if (name.match(regex.sg)) {
    resultName = prefix + `SG ${number}`
  } else if (name.match(regex.us)) {
    resultName = prefix + `US ${number}`
  } else if (name.match(regex.special)) {
    resultName = prefix + `special ${number}`
  } else {
    resultName = prefix + `${name}`
  }
  return resultName
}
