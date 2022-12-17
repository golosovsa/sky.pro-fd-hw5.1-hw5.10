import {
  applySizeMixin,
  applyTextMixin,
  applyThemeMixin,
  calcLayoutHeight,
  calcLayoutWidth
} from './mixins'
import themes, { THEME_DEFAULT } from './constants'

export const getTheme = () => {
  return localStorage.getItem('theme') || ''
}

export const storeTheme = (refresh) => {
  localStorage.setItem('theme', refresh)
}

export const isThemeExists = () => {
  return Boolean(getTheme())
}

const theme = {
  applyColors: (component) => applyThemeMixin(themes[THEME_DEFAULT], component),
  applyFont: (fontSize, lineHeight, fontWeight = 400) =>
    applyTextMixin(fontSize, lineHeight, fontWeight),
  applySize: (width, height) => applySizeMixin(width, height),

  width: (width) => calcLayoutWidth(width),
  height: (height) => calcLayoutHeight(height)
}

export default theme
