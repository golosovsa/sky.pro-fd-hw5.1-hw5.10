import {calcWidth, calcHeight} from "./functions";
import textMixin from "../fonts/mixins";

function layoutSizeMixin(width, height) {
    return `
        width: ${calcWidth(width)};
        height: ${calcHeight(height)};
    `;
}

function layoutTextMixin(fontSize, lineHeight, fontWeight) {
    return textMixin(calcHeight(fontSize), calcHeight(lineHeight), fontWeight);
}

export {layoutSizeMixin, layoutTextMixin};
