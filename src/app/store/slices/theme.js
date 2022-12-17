import { createSlice } from '@reduxjs/toolkit'
import { getTheme, storeTheme } from '../../theme'
import { THEME_DEFAULT, THEME_DARK, THEME_LIGHT } from '../../theme/constants'

const initialState = {
  value: getTheme() || THEME_DEFAULT,
  isSwitchTheme: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const theme = state.value === THEME_DARK ? THEME_LIGHT : THEME_DARK
      state.value = theme
      storeTheme(theme)
    },
    setIsSwitchTheme: (state, { payload }) => {
      state.isSwitchTheme = payload
    }
  }
})

export const { toggleTheme, setIsSwitchTheme } = themeSlice.actions
export default themeSlice.reducer
