import { createGlobalStyle } from 'styled-components'
import { THEME_TRANSITION_TIME } from '../constants'

export const SwitchThemeColorsTransition = createGlobalStyle`
  * {
    transition: 
      all ${THEME_TRANSITION_TIME}s linear !important;
  }
`
