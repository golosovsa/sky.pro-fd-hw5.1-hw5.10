import PALLETTE from "./pallette";
import { DEFAULT } from "./default";
import {
    getCSSVarList,
    getThemeVar,
    getColorThemeVars,
    getColorEffectThemeVars,
    getColorPseudoThemeVars,
} from "./functions";
import {
    colorThemeMixin,
    effectThemeMixin,
    pseudoThemeMixin,
    applyThemeMixin,
} from "./mixins";
import GlobalTheme from "./GlobalTheme";

const THEMES = { dark: DEFAULT };

export {
    PALLETTE,
    THEMES,
    getCSSVarList,
    getThemeVar,
    getColorThemeVars,
    getColorEffectThemeVars,
    getColorPseudoThemeVars,
    colorThemeMixin,
    effectThemeMixin,
    pseudoThemeMixin,
    applyThemeMixin,
    GlobalTheme,
};
