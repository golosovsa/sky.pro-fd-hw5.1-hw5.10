import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { default as S } from '../settings/settings'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${S.backend}/user/`
  }),
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
    getToken: builder.mutation({
      query: (body) => ({
        url: 'token/',
        method: 'POST',
        body
      })
    }),
    refreshToken: builder.mutation({
      query: (body) => ({
        url: 'refresh/',
        method: 'POST',
        body
      })
    })
  })
})

export const { useSignupMutation, useLoginMutation, useGetTokenMutation, useRefreshTokenMutation } =
  userApi
