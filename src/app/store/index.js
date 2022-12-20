import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/theme'
import authReducer from './slices/auth'
import { userApi } from '../services/user'
import { tracksApi } from '../services/tracks'
import { favoritesApi } from '../services/favorites'
import { selectionsApi } from '../services/selections'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [selectionsApi.reducerPath]: selectionsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(tracksApi.middleware)
      .concat(favoritesApi.middleware)
      .concat(selectionsApi.middleware)
})
