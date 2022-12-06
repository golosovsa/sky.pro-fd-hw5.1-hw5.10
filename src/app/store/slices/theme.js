import { createSlice } from '@reduxjs/toolkit'

export const THEME_DARK = 'dark'
export const THEME_LIGHT = 'light'
export const THEME_DEFAULT = THEME_DARK

const initialState = {
  value: THEME_DEFAULT
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === THEME_DARK ? THEME_LIGHT : THEME_DARK
    }
  }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
