import { jwt_decode } from 'jwt-decode'

export const authExpired = (token) => {
  return jwt_decode(token).exp * 1000
}
