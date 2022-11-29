import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { default as S } from '../settings/settings'

export const baseQueryBearer = fetchBaseQuery({
  baseUrl: S.backend,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token.access

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  }
})
