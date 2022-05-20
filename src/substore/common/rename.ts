import { getNum, reName } from '../utils/index'
import { actionObject } from '../utils/location'
/**
 * 节点重命名
 * @param {string} name 节点名称
 * @returns {string}
 */
// @ts-ignore
function operator(proxies: BaseProxy[]) {
  // 「」
  const counter = {}
  const nameMap = {}
  // @ts-ignore
  const { airport } = $arguments

  return proxies.filter((proxy, index) => {
    // 获取当前节点的编号
    let number = getNum(proxy.name)

    // 根据地区正则重命名
    const reResult = reName(proxy.name, actionObject)
    if (reResult.action === 'delete') return false
    if (!number) {
      if (counter[reResult.location]) {
        counter[reResult.location] += 1
      } else {
        counter[reResult.location] = 1
      }
      number = counter[reResult.location]
    }
    const proxyName = `${reResult.flag}${
      airport ? '「' + airport + '」' : ''
    } ${reResult.location} ${reResult.modified} ${number}`
    if (nameMap[proxyName]) {
      nameMap[proxyName] += 1
      proxy.name = proxyName + '_' + nameMap[proxyName]
    } else {
      nameMap[proxyName] = 1
      proxy.name = proxyName
    }

    return proxy
  })
}
