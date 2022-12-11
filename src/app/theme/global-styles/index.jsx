import { Reset } from './reset'
import { Fonts, GLOBAL_FONT } from './fonts'
import { DefaultThemeVars } from './default-theme-vars'
import { ResponsibleLayout } from './layout'
import { THEME_LIGHT } from '../constants'
import { LightThemeVars } from './light-theme-vars'
import { SwitchThemeColorsTransition } from './switch-theme-colors-transition'

export default function GlobalStyles({ theme, isSwitchTheme }) {
  return (
    <>
      <Reset />
      <Fonts />
      {isSwitchTheme && <SwitchThemeColorsTransition />}
      <DefaultThemeVars />
      {theme && theme === THEME_LIGHT && <LightThemeVars />}
      <ResponsibleLayout />
    </>
  )
}

export { GLOBAL_FONT }
