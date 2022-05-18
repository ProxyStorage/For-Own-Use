import { getNum, reName } from '../utils/index'
import { location, modified } from '../utils/location'
/**
 * 节点重命名
 * @param {string} name 节点名称
 * @returns {string}
 */
// @ts-ignore
function operator(proxies: BaseProxy[]) {
  // 「」
  const counter = {}
  // @ts-ignore
  const airpotName = $arguments['airport']
  return proxies.map((proxy, index) => {
    // 获取当前节点的编号
    let number = getNum(proxy.name)
    const locationList = Object.entries(location)
    const modifiedList = Object.entries(modified)
    // 根据地区正则重命名
    const reResult = reName(proxy.name, locationList, modifiedList)
    if (!number) {
      if (counter[reResult.location]) {
        counter[reResult.location] += 1
      } else {
        counter[reResult.location] = 1
      }
      number = counter[reResult.location]
    }

    proxy.name =
      (airpotName ? '「' + airpotName + '」' : '') +
      reResult.location +
      ' ' +
      reResult.modified +
      ' ' +
      number
    return proxy
  })
}
