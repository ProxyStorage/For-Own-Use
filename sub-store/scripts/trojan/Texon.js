function operator(proxies, targetPlatform) {
  const fingerprint =
    'e492977b86dd3af982ec3dea3874b8d5d3d1c37eaaf804af132512b8b23e2083'
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
