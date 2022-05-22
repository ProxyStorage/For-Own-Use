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
  /**
   * airport 参数（键）不区分大小写，即传入 Flower、flower、FLOWER都是等效的
   */
  // @ts-ignore
  const { airport, custom } = $arguments
  if (!airport && !custom) return proxies
  Object.keys(fingerprint).forEach((key) => {
    fingerprint[transformKey(key)] = fingerprint[key]
  })
  const airportName = transformKey(airport)
  if (!fingerprint[airportName]) return proxies
  return proxies.map((proxy) => {
    proxy = addFingerprint(
      proxy,
      fingerprint[airport] || custom,
      targetPlatform
    )
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
  if (proxy.type === 'trojan' && fingerprint && fingerprint !== 'undefined') {
    console.log('当前指纹：' + fingerprint)

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

function transformKey(key: string) {
  return key.toLowerCase()
}
