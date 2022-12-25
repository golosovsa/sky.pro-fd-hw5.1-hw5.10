import { createGlobalStyle } from 'styled-components'
import fontSkyPro from './stratosskyengweb-regular.woff2'

import { GLOBAL_FONT } from '../constants'

export const Fonts = createGlobalStyle`
  @font-face {
        font-family: ${GLOBAL_FONT};
        src: url(${fontSkyPro}) format('woff2'); 
    }

    body {
        font-family: ${GLOBAL_FONT}, sans-serif;
    }
`
