/**
 * @description 用于重命名Texon节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const texonPrefix = '[Texon]'
const texonFingerprint =
  'e492977b86dd3af982ec3dea3874b8d5d3d1c37eaaf804af132512b8b23e2083'

/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies: Array<TrojanType>, targetPlatform) {
  return proxies.map((proxy) => {
    proxy.name = `${texonPrefix}${proxy.name}`
    proxy = addFingerprint(proxy, targetPlatform)
    return proxy
  })
}

/**
 * 添加证书
 * @param {T} proxy
 * @param {'Surge'|'QX'} targetPlatform 客户端类型
 * @returns {T}
 */
// @ts-ignore
function addFingerprint(proxy: TrojanType, targetPlatform: 'Surge' | 'QX') {
  if (proxy.type === 'trojan') {
    switch (targetPlatform) {
      case 'Surge':
        proxy.tfo = `${
          proxy.tfo || false
        }, server-cert-fingerprint-sha256=${texonFingerprint}`
        break
      case 'QX':
        proxy.tfo = `${proxy.tfo || false}, tls-cert-sha256=${texonFingerprint}`
        break
      default:
        console.log('当前客户端：' + targetPlatform + '|未添加节点证书')
    }
  }
  return proxy
}
