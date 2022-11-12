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

function getCSSVarList(theme) {
    const keys = Object.keys(theme);

    const result = {};

    keys.forEach((key) => {
        const value = theme[key];
        if (isNode(value)) {
            const valueKeys = getCSSVarList(value);
            Object.entries(valueKeys).forEach((entry) => {
                const [valueKey, valueValue] = entry;
                result[`${key}-${valueKey}`] = valueValue;
            });
        } else {
            result[`${key}`] = value;
        }
    });
}

export default getCSSVarList;
