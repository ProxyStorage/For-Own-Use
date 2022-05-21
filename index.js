// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window)
  .on('load resize ', function () {
    var scrollWidth =
      $('.tbl-content').width() - $('.tbl-content table').width()
    $('.tbl-header').css({ 'padding-right': scrollWidth })
  })
  .resize()
function isRepeat(name, action, repeatNameObj) {
  let result = ''

  if (action === 'delete') return result
  if (repeatNameObj[name] === 1) {
    result = '不重复'
  } else {
    result = '存在重复' + (repeatNameObj[name] - 1)
  }
  return result
}

function generateTable(proxyList, originList) {
  let htmlStr = ''
  const repeatName = {}
  proxyList.forEach((item, index) => {
    if (repeatName[item.name]) {
      repeatName[item.name] += 1
    } else {
      repeatName[item.name] = 1
    }
    // 拼接原名称
    htmlStr += `<tr><td>${
      item.origin || (originList && originList[index].name) || ''
    }</td>`
    // 拼接新名称
    htmlStr += `<td>${item.name || ''}</td>`
    // 拼接执行操作
    htmlStr += `<td ${
      item.action === 'delete' ? 'style="color: red;font-weight: 600;"' : ''
    }>${item.action || 'rename'}</td>`
    // 拼接是否重复
    htmlStr += `<td>${isRepeat(item.name, item.action, repeatName)}</td></tr>`
  })
  return htmlStr
}
