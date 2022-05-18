/**
 * 从末尾获取传入字符串的数字
 * @param str 查找的字符串
 */
export function getNum(str: string) {
  const reg = /\d+$/
  const result = reg.exec(str)
  return result ? result[0] : ''
}

/**
 * 根据地区正则重命名
 * @param str 需要替换的字符串
 * @param locationReg 地区正则表达式数组
 * @returns {{location:number,modified:number}} 返回地区和修饰的索引
 */
export function reName(
  str: string,
  locationReg: [string, RegExp][],
  modifiedReg?: [string, RegExp][]
) {
  const returnResult = {
    location: str,
    modified: ''
  }
  for (let i = 0; i < locationReg.length; i++) {
    if (locationReg[i][1].test(str)) {
      returnResult.location = locationReg[i][0]
      break
    }
  }
  if (modifiedReg && modifiedReg.length) {
    for (let i = 0; i < modifiedReg.length; i++) {
      if (modifiedReg[i][1].test(str)) {
        returnResult.modified = modifiedReg[i][0]
        break
      }
    }
  }

  return returnResult
}
