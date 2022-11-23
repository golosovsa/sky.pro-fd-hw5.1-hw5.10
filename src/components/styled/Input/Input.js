import styled from "styled-components";
import { applyThemeMixin } from "../../../globals/theme/index";
import { layoutTextMixin } from "../../../globals/layout";

const Input = styled.input`
    ${applyThemeMixin("main", "input")}
    ${layoutTextMixin(16, 18, 400)}
    border: none;
    outline: none;
    &:hover,
    &:active {
        border: none;
        outline: none;
    }
    width: 100%;
`;

export default Input;
