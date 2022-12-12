import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/theme'
import authReducer from './slices/auth'
import { userApi } from '../services/user'
import { tracksApi } from '../services/tracks'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(tracksApi.middleware)
})
