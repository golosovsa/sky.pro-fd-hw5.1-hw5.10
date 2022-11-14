import {
    getColorThemeVars,
    getColorEffectThemeVars,
    getColorPseudoThemeVars,
} from "./funcs";

function colorThemeMixin(page, component = null, effect = null) {
    const colorVars = getColorThemeVars(page, component, effect);

    return colorVars.join(";\n");
}

function effectThemeMixin(page, component = null) {
    const effects = getColorEffectThemeVars(page, component);

    return Object.entries(effects)
        .map((entry) => {
            const [effect, vars] = entry;

            return `
            &:${effect} {
                ${vars.join(";\n")}
            }
        `;
        })
        .join("\n");
}

function pseudoThemeMixin(page, component = null) {
    const pseudos = getColorPseudoThemeVars(page, component);

    return Object.entries(pseudos)
        .map((entry) => {
            const [pseudo, vars] = entry;

            return `
            &::${pseudo} {
                ${vars.join(";\n")}
            }
        `;
        })
        .join("\n");
}

function applyThemeMixin(page, component = null) {
    let result = `${colorThemeMixin(page, component)};`;

    if (component) {
        result = `
            ${result};
            ${effectThemeMixin(page, component)};
            ${pseudoThemeMixin(page, component)};
        `;
    }

    return result;
}

export { colorThemeMixin, effectThemeMixin, pseudoThemeMixin, applyThemeMixin };
