import defaultTheme from './default'
import lightTheme from './light'

export const THEME_DARK = 'dark'
export const THEME_LIGHT = 'light'
export const THEME_DEFAULT = THEME_DARK

export const LAYOUT_WIDTH = 1920
export const LAYOUT_HEIGHT = 1080
export const LAYOUT_ASPECT = LAYOUT_WIDTH / LAYOUT_HEIGHT

const themes = {
  [THEME_DARK]: defaultTheme,
  [THEME_LIGHT]: lightTheme
}

export default themes
