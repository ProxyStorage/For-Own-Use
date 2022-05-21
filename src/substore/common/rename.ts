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
      testResultList.push(reResult)
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
    const proxyName = `${reResult.flag}${
      airport ? '「' + airport + '」' : ''
    } ${reResult.location} ${reResult.modified} ${
      reResult.origin === reResult.location ? '' : number
    }`

    if (nameMap[proxyName]) {
      nameMap[proxyName] += 1
      proxy.name = proxyName + '_' + nameMap[proxyName]
    } else {
      nameMap[proxyName] = 1
      proxy.name = proxyName
    }
    resultList.push(proxy)
    testResultList.push({ ...reResult, name: proxy.name })
  }

  if (test) {
    return testResultList
  } else {
    return resultList
  }

  // return proxies.filter((proxy, index) => {
  //   // 获取当前节点的编号
  //   let number = getNum(proxy.name)
  //   // 根据地区正则重命名
  //   const reResult = reName(proxy.name, actionObject)
  //   if (!number) {
  //     if (counter[reResult.location]) {
  //       counter[reResult.location] += 1
  //     } else {
  //       counter[reResult.location] = 1
  //     }
  //     number = counter[reResult.location]
  //   }
  //   const proxyName = `${reResult.flag}${
  //     airport ? '「' + airport + '」' : ''
  //   } ${reResult.location} ${reResult.modified} ${number}`
  //   if (nameMap[proxyName]) {
  //     nameMap[proxyName] += 1
  //     proxy.name = proxyName + '_' + nameMap[proxyName]
  //   } else {
  //     nameMap[proxyName] = 1
  //     proxy.name = proxyName
  //   }

  //   if (test) {
  //     return reResult
  //   } else {
  //     if (reResult.action === 'delete') return false
  //     return proxy
  //   }
  // })
}
