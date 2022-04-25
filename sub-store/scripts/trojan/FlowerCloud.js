function operator(proxies, targetPlatform) {
  const fingerprint =
    '67:1B:C8:F2:D4:20:EE:A7:EE:60:DA:BB:A3:F9:A4:D7:C8:29:0F:3E:2F:75:B6:A9:46:88:48:7D:D3:97:7E:98'
  proxies.forEach((proxy) => {
    if (targetPlatform === 'Surge') {
      proxy.tfo = `${
        proxy.tfo || false
      }, server-cert-fingerprint-sha256=${fingerprint}`
    } else if (targetPlatform === 'QX') {
      proxy.tfo = `${proxy.tfo || false}, tls-cert-sha256=${fingerprint}`
    }
  })
  return proxies
}
