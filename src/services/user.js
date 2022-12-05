import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as S from '../settings'

const TAG_TYPES = ['Token']

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${S.backend}/user/`
  }),
  tagTypes: TAG_TYPES,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: 'signup/',
        method: 'POST',
        body
      })
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'login/',
        method: 'POST',
        body
      })
    }),
    token: builder.mutation({
      query: (body) => ({
        url: 'login/',
        method: 'POST',
        body
      })
    }),
    refresh: builder.mutation({})
  })
})
