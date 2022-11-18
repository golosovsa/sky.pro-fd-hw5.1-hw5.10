import styled from "styled-components";
import { layoutSizeMixin, layoutTextMixin } from "../../globals/layout/mixins";
import { applyThemeMixin } from "../../globals/theme/mixins";
import { calcWidth, calcHeight } from "../../globals/layout/funcs";

const StyledButton = styled.button`
    ${applyThemeMixin("login", "button")}
    ${layoutSizeMixin(278, 52)}
    ${layoutTextMixin(18, 24, 400)}
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
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
`;

export default StyledButton;