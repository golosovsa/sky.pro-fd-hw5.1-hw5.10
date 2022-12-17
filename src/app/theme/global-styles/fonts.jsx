import { createGlobalStyle } from 'styled-components'
import fontSkyPro from './stratosskyengweb-regular.woff2'

export const GLOBAL_FONT = 'StratosSkyeng'

export const Fonts = createGlobalStyle`
  @font-face {
        font-family: ${GLOBAL_FONT};
        src: url(${fontSkyPro}) format('woff2'); 
    }

    body {
        font-family: ${GLOBAL_FONT}, sans-serif;
    }
`
