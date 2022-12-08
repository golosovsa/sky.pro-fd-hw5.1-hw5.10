import { Reset } from './reset'
import { Fonts, GLOBAL_FONT } from './fonts'
import { DefaultThemeVars } from './default-theme-vars'
import { ResponsibleLayout } from './layout'

export default function GlobalStyles() {
  return (
    <>
      <Reset />
      <Fonts />
      <DefaultThemeVars />
      <ResponsibleLayout />
    </>
  )
}

export { GLOBAL_FONT }
