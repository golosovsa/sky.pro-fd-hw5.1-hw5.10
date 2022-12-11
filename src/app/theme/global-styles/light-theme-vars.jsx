import { createGlobalStyle } from 'styled-components'
import themes, { THEME_LIGHT } from '../constants'
import { applyThemeCSSVarsMixin } from '../mixins'

export const LightThemeVars = createGlobalStyle`
  :root {
    ${applyThemeCSSVarsMixin(themes[THEME_LIGHT])}
  }
`
