import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../../services/auth'
import { authExpired } from '../../services/auth-expired'
import { storeRefresh } from '../../services/auth-refresh'

const initialState = {
  access: '',
  expired: 0
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.token.matchFulfilled, (state, { payload }) => {
      state.access = payload.access
      state.expired = authExpired(payload.access)
      storeRefresh(payload.refresh)
    })
  }
})

export default authSlice.reducer
