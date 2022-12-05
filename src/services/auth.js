import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as S from '../settings'

export const authApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${S.backend}/user/`
  }),
  tagTypes: ['Tokens'],
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
      }),
      invalidatesTags: ['Tokens']
    }),
    token: builder.mutation({
      query: (body) => ({
        url: 'token/',
        method: 'POST',
        body
      }),
      providesTags: () => ['Tokens']
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: 'token/refresh/',
        method: 'POST',
        body
      })
    })
  })
})

export const { useSignupMutation, useLoginMutation, useTokenMutation, useRefreshMutation } = authApi
