function textMixin(fontSize, lineHeight, fontWeight) {
    return `
        font-family: "stratosskyengweb", sans-serif;
        font-style: normal;
        font-size: ${fontSize};
        line-height: ${lineHeight};
        font-weight: ${fontWeight};
    `;
}

export default textMixin;
