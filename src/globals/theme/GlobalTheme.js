import { createGlobalStyle } from "styled-components";
import { DEFAULT } from "./default";
import { getCSSVarList } from "./functions";

const variables = getCSSVarList(DEFAULT);

const GlobalTheme = createGlobalStyle`
    :root {
        ${variables}
    }
`;

export default GlobalTheme;
