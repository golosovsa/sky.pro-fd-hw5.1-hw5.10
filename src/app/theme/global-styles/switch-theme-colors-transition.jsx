import { createGlobalStyle } from 'styled-components'
import { THEME_TRANSITION_TIME } from '../constants'

export const SwitchThemeColorsTransition = createGlobalStyle`
  * {
    transition: 
      color ${THEME_TRANSITION_TIME}s linear, 
      background-color ${THEME_TRANSITION_TIME}s linear !important;
  }
`
