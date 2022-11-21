import styled from "styled-components";
import { applyThemeMixin } from "../../../globals/theme/index";
import { layoutTextMixin, calcHeight } from "../../../globals/layout/index";

const LoginInput = styled.input`
    border: none;
    ${applyThemeMixin("login", "input")}
    ${layoutTextMixin(18, 24, 400)}
    font-feature-settings: 'pnum' on, 'lnum' on;
    border-bottom-width: ${calcHeight(1)};
    border-bottom-style: solid;
    padding: ${calcHeight(8)} 0;
    align-self: stretch;
    outline: none;
`;

export default LoginInput;
