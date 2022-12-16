const FILTER_ITEM_NAME = 'filter'
export const getFilter = () => {
  const filter = localStorage.getItem(FILTER_ITEM_NAME)
  return filter ? JSON.parse(filter) : {}
}

export const storeFilter = (filter) => {
  localStorage.setItem(FILTER_ITEM_NAME, JSON.stringify(filter))
}
