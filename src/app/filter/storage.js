const FILTER_ITEM_NAME = 'filter'
export const getFilter = () => {
  const filter = localStorage.getItem(FILTER_ITEM_NAME)
  console.log('load', filter)

  return filter ? JSON.parse(filter) : {}
}

export const storeFilter = (filter) => {
  console.log('set', filter)
  localStorage.setItem(FILTER_ITEM_NAME, JSON.stringify(filter))
}
