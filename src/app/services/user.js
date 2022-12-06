import { createApi } from '@reduxjs/toolkit/dist/query'
import { publicQuery } from '../auth/query'

const TOKEN_TAG = 'Tokens'

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: publicQuery,
  tagTypes: [TOKEN_TAG],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body
      })
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body
      }),
      invalidatesTags: [TOKEN_TAG]
    }),
    token: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body
      }),
      providesTags: [TOKEN_TAG]
    })
  })
})

export const { useSignupMutation, useLoginMutation, useTokenMutation } = userApi
