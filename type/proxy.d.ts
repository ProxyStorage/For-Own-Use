/**
 * from https://lancellc.gitbook.io/clash/clash-config-file/proxies
 */
interface TrojanType extends BaseProxy {
  type: 'trojan'
  password: string
  network: string
  sni: string
  tfo: string
  'skip-cert-verify': boolean
  udp: boolean
  'grpc-opts': any
}
interface SSProxyType extends BaseProxy {
  type: 'ss'
  cipher: SSCipherType
  udp?: boolean
  plugin?: any
  pluginopts?: any
}

type SSCipherType =
  | 'aes-128-gcm'
  | 'aes-192-gcm'
  | 'aes-256-gcm'
  | 'aes-128-cfb'
  | 'aes-192-cfb'
  | 'aes-256-cfb'
  | 'aes-128-ctr'
  | 'aes-192-ctr'
  | 'aes-256-ctr'
  | 'rc4-md5'
  | 'chacha20-ietf'
  | 'chacha20-ietf-poly1305'
  | 'xchacha20-ietf-poly1305'

interface BaseProxy {
  name: string
  server: string
  port: number
}
