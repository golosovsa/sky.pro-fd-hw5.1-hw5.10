import styled from "styled-components";
import {
    layoutSizeMixin,
    layoutTextMixin,
    calcWidth,
    calcHeight,
} from "../../../globals/layout/index";
import { applyThemeMixin } from "../../../globals/theme/index";

const LoginButton = styled.button`
    ${layoutSizeMixin(278, 52)}
    ${layoutTextMixin(18, 24, 400)}
    letter-spacing: -0.003em;
    font-feature-settings: "pnum" on, "lnum" on;
    border-width: min(${calcWidth(1)}, ${calcHeight(1)});
    border-style: solid;
    border-radius: min(${calcWidth(6)}, ${calcHeight(6)});
    transition: background-color 0.25s ease-in-out;
    outline: none;
    &:hover,
    &:active,
    &:focus {
        outline: none;
        border-style: solid;
    }
    ${(props) => {
        if (props.type === "submit") {
            return applyThemeMixin("login", "submit");
        }
        return applyThemeMixin("login", "button");
    }}
`;

export default LoginButton;
