/**
 * @description 用于重命名Texon节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const prefix = '[Texon]'
const fingerprint =
  'e492977b86dd3af982ec3dea3874b8d5d3d1c37eaaf804af132512b8b23e2083'

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
function operator(proxies, targetPlatform) {
  return proxies.map((proxy) => {
    proxy.name = reName(proxy.name)
    proxy = addFingerprint(proxy, targetPlatform)
    return proxy
  })
}

/**
 * 节点重命名
 * @param {string} name 节点名称
 * @returns {string}
 */
function reName(name) {
  let resultName = name
  if (name.match(regex.hk)) {
    resultName = prefix + `HK}`
  } else if (name.match(regex.tw)) {
    resultName = prefix + `TW`
  } else if (name.match(regex.jp)) {
    resultName = prefix + `JP`
  } else if (name.match(regex.kr)) {
    resultName = prefix + `KR`
  } else if (name.match(regex.sg)) {
    resultName = prefix + `SG`
  } else if (name.match(regex.us)) {
    resultName = prefix + `US`
  } else if (name.match(regex.special)) {
    resultName = prefix + `special`
  } else {
    resultName = prefix + `${name}`
  }
  return resultName
}
/**
 *
 * @param {T} proxy
 * @param {'Surge'|'QX'} targetPlatform 客户端类型
 * @returns {T}
 */
function addFingerprint(proxy, targetPlatform) {
  if (proxy.type === 'trojan') {
    switch (targetPlatform) {
      case 'Surge':
        proxy.tfo = `${
          proxy.tfo || false
        }, server-cert-fingerprint-sha256=${fingerprint}`
        console.log('当前客户端：Surge')
        break
      case 'QX':
        proxy.tfo = `${proxy.tfo || false}, tls-cert-sha256=${fingerprint}`
        console.log('当前客户端：QX')
        break
      default:
        console.log('当前客户端：' + targetPlatform + '|未添加节点证书')
    }
  }
  return proxy
}
