import { authExpired } from './auth-expired'

export const getRefresh = () => {
  return [localStorage.getItem('refresh'), localStorage.getItem('expired')]
}

export const storeRefresh = (refresh) => {
  localStorage.setItem('refresh', refresh)
  localStorage.setItem('expired', authExpired(refresh))
}
