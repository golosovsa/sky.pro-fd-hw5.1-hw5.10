import { createGlobalStyle } from 'styled-components'
import fontSkyPro from './stratosskyengweb-regular.woff2'

export const Fonts = createGlobalStyle`
  @font-face {
        font-family: 'StratosSkyeng';
        src: url(${fontSkyPro}) format('woff2'); 
    }

    body {
        font-family: 'StratosSkyeng', sans-serif;
    }
`
