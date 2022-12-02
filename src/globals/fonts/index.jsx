import { createGlobalStyle } from 'styled-components'
import StratosSkyeng from './stratosskyengweb-regular.woff'
import StratosSkyeng2 from './stratosskyengweb-regular.woff2'

export const FontsStyles = createGlobalStyle`
  @font-face {
    font-family: 'StratosSkyeng';
    src:  url(${StratosSkyeng}) format('woff2'), 
          url(${StratosSkyeng2}) format('woff');
  }

  html,
  body {
    font-family: 'StratosSkyeng', sans-serif;
  }
  textarea, input {
    font-family: 'StratosSkyeng', sans-serif;
  }
`
