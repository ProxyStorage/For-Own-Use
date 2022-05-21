import { getNum, ReanmeObject, reName } from '../utils/index'
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
  let airport = ''
  let test = false
  // @ts-ignore
  if ($arguments) {
    // @ts-ignore
    airport = $arguments['airport']
    // @ts-ignore
    test = $arguments['test']
  }
  // 用于测试的数组节点
  const testResultList = []
  // 用于返回substore的节点
  const resultList = []
  for (let i = 0; i < proxies.length; i++) {
    const proxy = proxies[i]
    // 获取当前节点的编号
    let number = getNum(proxy.name)
    // 根据地区正则重命名
    const reResult = reName(proxy.name, actionObject)
    if (reResult.action === 'delete') {
      testResultList.push({ ...reResult, ...proxy })
      continue
    }
    if (!number) {
      if (counter[reResult.location]) {
        counter[reResult.location] += 1
      } else {
        counter[reResult.location] = 1
      }
      number = counter[reResult.location]
    }

    const proxyName = getProxyName(reResult, number, airport)

    if (nameMap[proxyName]) {
      nameMap[proxyName] += 1
      proxy.name = proxyName + '_' + nameMap[proxyName]
    } else {
      nameMap[proxyName] = 1
      proxy.name = proxyName
    }
    resultList.push(proxy)
    testResultList.push({ ...reResult, ...proxy })
  }

  if (test) {
    return testResultList
  } else {
    return resultList
  }
}

/**
 * 获取节点名称
 * @param reResult 重命名结果
 * @param number 当前节点编号
 * @param airport 当前节点所在机场
 * @returns {string}
 */
function getProxyName(
  reResult: ReanmeObject,
  number: string,
  airport?: string
) {
  const flag = reResult.flag ? reResult.flag : ''
  const airportName = airport ? '「' + airport + '」' : ''
  const locationName = reResult.location
  const modifiedName = reResult.modified
  return `${flag}${airportName} ${locationName} ${modifiedName} ${number}`
}
