import { createGlobalStyle } from "styled-components";
import {DEFAULT} from "./theme/default";
import {getCSSVarList} from "./theme/funcs";

const themes = [DEFAULT];

const variables = getCSSVarList(DEFAULT);

const GlobalColorThemeDefault = createGlobalStyle`
    :root {
        ${variables}
    }
`;

export { themes, GlobalColorThemeDefault };
