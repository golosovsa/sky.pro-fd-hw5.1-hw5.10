import { createSlice } from '@reduxjs/toolkit'
import { userApi } from '../../services/user'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user
      state.token = initialState.token
      state.isAuthenticated = initialState.isAuthenticated
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.login.matchPending, (state, action) =>
        console.log(`Pending.\nstate:\n${state};\naction:\n${action}\n----------`)
      )
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) =>
        console.log(`Fulfilled.\nstate:\n${state};\naction:\n${action}\n----------`)
      )
      .addMatcher(userApi.endpoints.login.matchRejected, (state, action) =>
        console.log(`Rejected.\nstate:\n${state};\naction:\n${action}\n----------`)
      )
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer
