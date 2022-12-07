import { createSlice } from '@reduxjs/toolkit'
import { THEME_DEFAULT, THEME_DARK, THEME_LIGHT } from '../../theme/constants'

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
