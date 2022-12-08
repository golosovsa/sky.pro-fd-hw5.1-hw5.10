import { createGlobalStyle } from 'styled-components'
import themes, { THEME_DEFAULT } from '../constants'
import { applyThemeCSSVarsMixin } from '../mixins'

export const DefaultThemeVars = createGlobalStyle`
  :root {
    ${applyThemeCSSVarsMixin(themes[THEME_DEFAULT])}
  }
`
