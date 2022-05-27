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

  /**
   * airport 机场名
   * test 是否是测试模式（用于浏览器环境）
   * template 修改为节点名的模板 默认为 {flag}「{airport}」{location} {modified} {number} 即 国旗 +「机场名」 + 地区 + 修饰 + 编号
   * location 地区输出的格式 默认为 使用custom字段（无此字段则使用enFull） ,可选参数 enShort,enShortThree,enFull,zh
   * modified 修饰（标准、高级等）输出的格式 默认为 使用custom字段（无此字段则使用enShort） ,可选参数 enShort,enFull,zh
   */
  const {
    airport = '',
    test = false,
    template = '{flag}「{airport}」{location} {modified} {number}',
    location,
    modified
    // @ts-ignore
  } = $arguments

  // 用于测试的数组节点
  const testResultList = []
  // 用于返回substore的节点
  const resultList = []
  for (let i = 0; i < proxies.length; i++) {
    const proxy = proxies[i]
    // 获取当前节点的编号
    let number = getNum(proxy.name)
    // 根据地区正则重命名
    const reResult = reName(proxy.name, actionObject, location, modified)
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

    const proxyName = getProxyName(template, reResult, number, airport)

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
  proxyTemplate: string,
  reResult: ReanmeObject,
  number: string,
  airport?: string
) {
  const flag = reResult.flag || ''
  const airportName = airport || ''
  const locationName = reResult.location || ''
  const modifiedName = reResult.modified || ''

  proxyTemplate = proxyTemplate.replace(/\{airport\}/g, airportName)
  proxyTemplate = proxyTemplate.replace(/\{flag\}/g, flag)
  proxyTemplate = proxyTemplate.replace(/\{location\}/g, locationName)
  proxyTemplate = proxyTemplate.replace(/\{modified\}/g, modifiedName)
  proxyTemplate = proxyTemplate.replace(/\{number\}/g, number)
  return proxyTemplate
  // return `${flag}${airportName} ${locationName} ${modifiedName} ${number}`
}
