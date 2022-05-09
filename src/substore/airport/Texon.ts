/**
 * @description 用于重命名Texon节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const texonPrefix = '[Texon]'
const texonFingerprint =
  'db dc c2 2d 3a 60 a7 92 92 84 4c 72 6e 21 0e 30 49 d5 e2 58 ad 08 67 20 83 79 f6 f6 52 a9 f0 16'

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
