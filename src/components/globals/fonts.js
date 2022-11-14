import { createGlobalStyle } from "styled-components";
import StratosSkyeng from "../../fonts/stratosskyengweb-regular.woff";
import StratosSkyeng2 from "../../fonts/stratosskyengweb-regular.woff2";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'StratosSkyeng';
        src: url(${StratosSkyeng}) format('woff2'), 
             url(${StratosSkyeng2}) format('woff');
    }

    html,
    body {
        font-family: 'StratosSkyeng', sans-serif;
    }
`

export default GlobalFonts;
