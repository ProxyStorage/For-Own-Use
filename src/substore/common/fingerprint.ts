/**
 * @description 为Trojan协议机场添加指纹，传入参数airport来指定键
 * 键参考 utils/fingerprint.ts
 */

// 机场节点修饰前缀

import fingerprint from '../utils/fingerprint'
/**
 * 入口函数
 * @param {TrojanType[]} proxies
 * @returns
 */
// @ts-ignore
function operator(proxies: TrojanType[], targetPlatform) {
  // @ts-ignore
  const airpotName = $arguments['airport']
  if (!fingerprint[airpotName]) return proxies
  return proxies.map((proxy) => {
    proxy = addFingerprint(proxy, fingerprint[airpotName], targetPlatform)
    return proxy
  })
}
/**
 * 添加证书
 * @param {T} proxy
 * @param {'Surge'|'QX'} targetPlatform 客户端类型
 * @param {string} fingerprint 证书
 * @returns {T}
 */
function addFingerprint(
  proxy: TrojanType,
  fingerprint: string,
  targetPlatform: TargetPlatType
) {
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
