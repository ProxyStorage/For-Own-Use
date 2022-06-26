const _tempList = []
document.querySelectorAll('.ant-table-row').forEach((item) => {
  _tempList.push({
    name: `${item.firstChild.textContent}`
  })
})
console.log(_tempList)
