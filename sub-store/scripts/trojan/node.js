/**
 * 用于同步的脚本
 */
const fingerprintMap = {
  // 键为脚本重命名后的名称
  '[Flower]':
    '67:1B:C8:F2:D4:20:EE:A7:EE:60:DA:BB:A3:F9:A4:D7:C8:29:0F:3E:2F:75:B6:A9:46:88:48:7D:D3:97:7E:98',
  '[Texon]': 'e492977b86dd3af982ec3dea3874b8d5d3d1c37eaaf804af132512b8b23e2083'
}
function operator(proxies, targetPlatform) {
  proxies.forEach((proxy) => {
    const proxyName = Object.keys(fingerprintMap)
    if (proxyName.includes(proxy.name)) {
      if (targetPlatform) {
        if (targetPlatform === 'Surge') {
          proxy.tfo = `${
            proxy.tfo || false
          }, server-cert-fingerprint-sha256=${fingerprint}`
        } else if (targetPlatform === 'QX') {
          proxy.tfo = `${proxy.tfo || false}, tls-cert-sha256=${fingerprint}`
        }
      }
    }
  })
  return proxies
}
