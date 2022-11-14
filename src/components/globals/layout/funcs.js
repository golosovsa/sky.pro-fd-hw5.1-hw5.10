function calcWidth(width) {
    return `calc(${width} * var(--page-width) / var(--layout-width))`;
}

function calcHeight(height) {
    return `calc(${height} * var(--page-height) / var(--layout-height));`;
}

export {calcWidth, calcHeight};