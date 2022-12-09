import { createSlice } from '@reduxjs/toolkit'
import { deleteRefresh, storeRefresh } from '../../auth/refresh'
import { userApi } from '../../services/user'

const initialState = {
  access: '',
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.access = initialState.access
      state.isLoggedIn = initialState.isLoggedIn
      deleteRefresh()
    },
    tokenReceived: (state, { payload }) => {
      const { access, refresh } = payload
      if (access) state.access = access
      if (refresh) storeRefresh(refresh)
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.token.matchFulfilled, (state, { payload }) => {
        const { access, refresh } = payload
        if (!access || !refresh) return
        state.access = access
        state.isLoggedIn = true
        storeRefresh(refresh)
      })
      .addMatcher(userApi.endpoints.refresh.matchFulfilled, (state, { payload }) => {
        const { access, refresh } = payload
        if (!access || !refresh) return
        state.access = access
        state.isLoggedIn = true
        storeRefresh(refresh)
      })
  }
})

export const { logOut, tokenReceived } = authSlice.actions
export default authSlice.reducer
