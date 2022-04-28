/**
 * @description 用于重命名花云节点名称
 * @Author DreamyTZK
 * @Date 2022-04-17
 */

// 机场节点修饰前缀
const prefix = '[Flower]'
// trojan指纹
const fingerprint =
  '67:1B:C8:F2:D4:20:EE:A7:EE:60:DA:BB:A3:F9:A4:D7:C8:29:0F:3E:2F:75:B6:A9:46:88:48:7D:D3:97:7E:98'
/**
 * 入口函数
 * @param {{name:string}[]} proxies
 * @returns
 */
function operator(proxies, targetPlatForm) {
  return proxies.map((proxy) => {
    proxy.name = proxy.name.replace(' IEPL 中继 ', ' ')
    proxy.name = replaceLocation(proxy.name)
    proxy.name = prefix + proxy.name
    if (targetPlatform === 'Surge') {
      proxy.tfo = `${
        proxy.tfo || false
      }, server-cert-fingerprint-sha256=${fingerprint}`
    } else if (targetPlatform === 'QX') {
      proxy.tfo = `${proxy.tfo || false}, tls-cert-sha256=${fingerprint}`
    }
    return p
  })
}

/**
 * 替换地区
 * @param {string} name
 */
function replaceLocation(name) {
  let resultName = name
  if (name.match(/香港/)) {
    resultName = name.replace('香港', 'HK ')
  } else if (name.match(/台湾/)) {
    resultName = name.replace('台湾', 'TW ')
  } else if (name.match(/日本/)) {
    resultName = name.replace('日本', 'JP ')
  } else if (name.match(/韩国/)) {
    resultName = name.replace('韩国', 'KR ')
  } else if (name.match(/新加坡/)) {
    resultName = name.replace('新加坡', 'SG ')
  } else if (name.match(/美国/)) {
    resultName = name.replace('美国', 'US ')
  } else {
    resultName = name
  }
  return resultName
}
