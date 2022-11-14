function flexMixin(flow="column nowrap", justifyContent="center", alignItems="center", alignContent="center") {
    return `
        display: flex;
        flex-flow: ${flow};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        align-content: ${alignContent};
    `;
}

function flexCenterMixin() {
    return flexMixin();
}

export {flexMixin, flexCenterMixin};