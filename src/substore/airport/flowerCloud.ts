/**
 * @description 用于重命名花云节点添加Trojan密钥和前缀
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const prefix = '[Flower]'
const fingerprint =
  '67:1B:C8:F2:D4:20:EE:A7:EE:60:DA:BB:A3:F9:A4:D7:C8:29:0F:3E:2F:75:B6:A9:46:88:48:7D:D3:97:7E:98'

/**
 * 入口函数
 * @param {TrojanType[]} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies: TrojanType[], targetPlatform) {
  return proxies.map((proxy) => {
    proxy.name = proxy.name.replace(' IEPL 中继 ', ' ')
    proxy.name = prefix + proxy.name
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
        }, server-cert-fingerprint-sha256=${fingerprint}`
        break
      case 'QX':
        proxy.tfo = `${proxy.tfo || false}, tls-cert-sha256=${fingerprint}`
        break
      default:
        console.log('当前客户端：' + targetPlatform + '|未添加节点证书')
    }
  }
  return proxy
}
