import { createSlice } from '@reduxjs/toolkit'
import { deleteRefresh, storeRefresh } from '../../auth/refresh'

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
      state.access = access || ''
      if (refresh) storeRefresh(refresh)
    }
  }
})

export const { logOut, tokenReceived } = authSlice.actions
export default authSlice.reducer
