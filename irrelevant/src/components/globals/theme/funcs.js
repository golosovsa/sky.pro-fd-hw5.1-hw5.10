import {
    DEFAULT,
    COLOR_THEME_ATTRIBUTES,
    EFFECT_THEME_ATTRIBUTES,
    PSEUDO_THEME_ATTRIBUTES,
} from "./default";

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

function getNodeVars(themeNode, properties, defaults = false) {
    const { path, node } = themeNode;
    const defaultNode = defaults ? getDefaultTheme() : {};

    return properties
        .map((property) => {
            if (property in node) {
                return `${property}: var(${path}-${property})`;
            }
            if (property in defaultNode) {
                return `${property}: var(--${property})`;
            }
            return "";
        })
        .filter((item) => item.length !== 0);
}

function getThemeVar(page, attribute, component = null, effect = null) {
    const themeNode = getThemeNode(page, component, effect);
    const themeVar = getNodeVars(
        themeNode,
        Array.isArray(attribute) ? attribute : [attribute],
        true
    );

    return themeVar;
}

function getColorThemeVars(page, component = null, effect = null) {
    const themeNode = getThemeNode(page, component, effect);
    const colorThemeVars = getNodeVars(themeNode, COLOR_THEME_ATTRIBUTES);

    return colorThemeVars;
}

function getColorEffectThemeVars(page, component = null, effect = null, defaults = false) {
    const themeNode = getThemeNode(page, component, effect);
    const defaultNode = defaults ? getDefaultTheme() : {};
    const result = {};

    EFFECT_THEME_ATTRIBUTES.forEach(EFFECT => {
        if (EFFECT in themeNode.node) {
            result[EFFECT] = getNodeVars(
                {
                    node: themeNode.node[EFFECT],
                    path: `${themeNode.path}-${EFFECT}`,
                },
                COLOR_THEME_ATTRIBUTES,
            );
        } else if (EFFECT in defaultNode) {
            result[EFFECT] = getNodeVars(
                {
                    node: defaultNode[EFFECT],
                    path: "-",
                }, 
                COLOR_THEME_ATTRIBUTES
            );
        }
    });

    

    return result;
}

function getColorPseudoThemeVars(page, component = null, effect = null, defaults = false) {
    const themeNode = getThemeNode(page, component, effect);
    const defaultNode = defaults ? getDefaultTheme() : {};
    const result = {};

    PSEUDO_THEME_ATTRIBUTES.forEach(PSEUDO => {
        if (PSEUDO in themeNode.node) {
            result[PSEUDO] = getNodeVars(
                {
                    node: themeNode.node[PSEUDO],
                    path: `${themeNode.path}-${PSEUDO}`,
                }, 
                COLOR_THEME_ATTRIBUTES,
            );
        } else if (PSEUDO in defaultNode) {
            result[PSEUDO] = getNodeVars(
                {
                    node: defaultNode[PSEUDO],
                    path: "",

                }, 
                COLOR_THEME_ATTRIBUTES,
            );
        }
    });

    return result;
}

export {
    getCSSVarList,
    getThemeVar,
    getColorThemeVars,
    getColorEffectThemeVars,
    getColorPseudoThemeVars,
};
