import DEFAULT from "./default";

function isNode(variable) {
    if (variable === null || variable === undefined) {
        return false;
    }

    if (Array.isArray(variable)) {
        return false;
    }

    if (typeof variable !== "object") {
        return false;
    }

    return true;
}

function getThemeVarMap(theme) {
    const keys = Object.keys(theme);

    const result = [];

    keys.forEach((key) => {
        const value = theme[key];
        if (isNode(value)) {
            const valueKeys = getThemeVarMap(value);

            Object.keys(valueKeys).forEach((valueKey) => {
                const valueValue = valueKeys[valueKey];
                result[`${key}-${valueKey}`] = valueValue;
            });
        } else {
            result[`${key}`] = value;
        }
    });

    return result;
}

function getCSSVarList(theme) {
    const themeVarMap = getThemeVarMap(theme);

    return Object.entries(themeVarMap)
        .map((entity) => `--${entity[0]}: ${entity[1]};`)
        .join("\n");
}

function getDefaultTheme() {
    return DEFAULT;
}

function getThemeNode(page, component = null, effect = null) {
    const theme = getDefaultTheme();
    let themeNode = theme;
    let themeNodePath = "-";

    if (page in theme) {
        themeNode = theme[page];
        themeNodePath = `${themeNodePath}-${page}`;
    }

    if (component && isNode(themeNode) && component in themeNode) {
        themeNode = themeNode[component];
        themeNodePath = `${themeNodePath}-${component}`;
    }

    if (effect && isNode(themeNode) && effect in themeNode) {
        themeNode = themeNode[effect];
        themeNodePath = `${themeNodePath}-${effect}`;
    }

    return {
        path: themeNodePath,
        node: themeNode,
    };
}

function getColorThemeVars(page, component = null, effect = null) {
    const {path, node} = getThemeNode(page, component, effect)
    const result = [];

    
}

export { getCSSVarList, getColorThemeVars };
