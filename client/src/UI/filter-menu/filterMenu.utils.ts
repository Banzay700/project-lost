export const filterListItems = (newItemFilter: string[], lengthAllFilterItems: number) => {
  let filterList

  if (newItemFilter[0] === 'all' && newItemFilter.length > 0) {
    filterList = newItemFilter.filter((item) => item !== 'all')
  }

  if (newItemFilter[newItemFilter.length - 1] === 'all' && newItemFilter.length > 0) {
    filterList = newItemFilter.filter((item) => item === 'all')
  } else {
    filterList = newItemFilter.filter((item) => item !== 'all')
  }

  if (lengthAllFilterItems === filterList.length) {
    filterList = ['all']
  }

  return filterList.length ? filterList : ['all']
}
