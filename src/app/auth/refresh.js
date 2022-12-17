export const getRefresh = () => {
  return localStorage.getItem('refresh') || ''
}

export const storeRefresh = (refresh) => {
  localStorage.setItem('refresh', refresh)
}

export const deleteRefresh = () => {
  localStorage.removeItem('refresh')
}

export const isRefreshExists = () => {
  return Boolean(getRefresh())
}
