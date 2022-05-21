import { ActionObject } from './location'

/**
 * 从末尾获取传入字符串的数字
 * @param str 查找的字符串
 */
export function getNum(str: string) {
  const reg = /([0-9]\d*\.?\d*)|(0\.\d*[0-9])$/

  const result = reg.exec(str)
  return result ? result[0] : ''
}

export interface ReanmeObject {
  origin: string
  location: string
  modified: string
  action: 'rename' | 'delete'
  flag?: string
}

/**
 * 根据地区正则重命名
 * @param str 需要替换的字符串
 * @param actionObject 重命名配置对象
 * @returns {{location:number,modified:number}} 返回地区和修饰的索引
 */
export function reName(str: string, actionObject: ActionObject) {
  const returnResult: ReanmeObject = {
    origin: str,
    location: str,
    modified: '',
    action: 'rename',
    flag: ''
  }
  const { locationList, modifiedList, deleteList } = actionObject

  for (let i = 0; i < deleteList.length; i++) {
    const modifiedReg = new RegExp(deleteList[i].reg, 'gi')
    if (modifiedReg.test(str)) {
      returnResult.modified = deleteList[i].enShort
      returnResult.action = 'delete'
      break
    }
  }

  for (let i = 0; i < locationList.length; i++) {
    const locationReg = new RegExp(locationList[i].reg, 'gi')
    if (locationReg.test(str)) {
      returnResult.location = locationList[i].custom || locationList[i].enFull
      returnResult.flag = locationList[i].flag || ''
      break
    }
  }
  for (let i = 0; i < modifiedList.length; i++) {
    const modifiedReg = new RegExp(modifiedList[i].reg, 'gi')
    if (modifiedReg.test(str)) {
      returnResult.modified = modifiedList[i].custom || modifiedList[i].enShort
      if (returnResult.action !== 'rename') {
        returnResult.action = modifiedList[i].action
      }
      break
    }
  }

  return returnResult
}
