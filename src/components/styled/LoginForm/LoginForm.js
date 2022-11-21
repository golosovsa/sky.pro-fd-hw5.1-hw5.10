import styled from "styled-components";
import {
    layoutSizeMixin,
    calcWidth,
    calcHeight,
} from "../../../globals/layout/index";
import { applyThemeMixin } from "../../../globals/theme/index";

const LoginForm = styled.form`
    ${applyThemeMixin("login", "form")}
    ${layoutSizeMixin(366, 439)}
    padding: ${calcHeight(45)} ${calcWidth(44)};
    border-radius: min(${calcWidth(12)}, ${calcHeight(12)});
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

export default LoginForm;
