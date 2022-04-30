// 正则表达式
const regex = {
  hk: /香港|港|HK|Hong/,
  tw: /台湾|台灣|台|TW|Tai/,
  jp: /日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan/,
  kr: /韩国|韓國|KR|Korea|KOR|首尔|韩|韓|春川/,
  sg: /新加坡|坡|狮城|SG|Singapore/,
  us: /美国|美國|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States/,
  special: /特殊|福利|实验性/
}
/**
 * 节点重命名
 * @param {string} name 节点名称
 * @returns {string}
 */
// @ts-ignore
function operator(proxies: BaseProxy[]) {
  return proxies.map((proxy) => {
    proxy.name = proxy.name.replace(regex.hk, 'HK')
    proxy.name = proxy.name.replace(regex.tw, 'TW')
    proxy.name = proxy.name.replace(regex.jp, 'JP')
    proxy.name = proxy.name.replace(regex.kr, 'KR')
    proxy.name = proxy.name.replace(regex.sg, 'SG')
    proxy.name = proxy.name.replace(regex.us, 'US')
    proxy.name = proxy.name.replace(regex.special, ' Special')
    return proxy
  })
}
