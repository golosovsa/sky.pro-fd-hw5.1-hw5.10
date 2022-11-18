import styled from "styled-components";
import { applyThemeMixin } from "../../globals/theme/mixins";
import { layoutTextMixin } from "../../globals/layout/mixins";
import { calcHeight } from "../../globals/layout/funcs";

const StyledInput = styled.input`
    border: none;
    ${applyThemeMixin("login", "input")}
    ${layoutTextMixin(18, 24, 400)}
    font-feature-settings: 'pnum' on, 'lnum' on;
    border-bottom-width: ${calcHeight(1)};
    border-bottom-style: solid;
    padding: ${calcHeight(8)} 0;
    margin: ${calcHeight(10)} 0;
    align-self: stretch;
    outline: none;
`;

export default StyledInput;