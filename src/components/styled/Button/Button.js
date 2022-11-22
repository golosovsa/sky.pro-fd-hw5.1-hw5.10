import styled from "styled-components";
import {
    calcWidth,
    calcHeight,
    layoutTextMixin,
} from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";

const Button = styled.button`
    &:hover,
    &:active {
        outline: none;
    }
    ${layoutTextMixin(16, 18, 400)}
    ${props => !props.selected && applyThemeMixin("main", "button")}
    ${props => props.selected && applyThemeMixin("main", "buttonSelected")}
    padding: ${calcHeight(9)} ${calcWidth(20)};
    letter-spacing: 0.001em;
    font-feature-settings: "pnum" on, "lnum" on;
    text-transform: lowercase;
    outline: none;
    border-width: min(${calcWidth(1)}, ${calcHeight(1)});
    border-style: solid;
    border-radius: ${calcHeight(60)};
    transition: border-color 0.2s linear, color 0.2s linear;
`;

export default Button;
