import styled from "styled-components";
import { flexCenterMixin } from "../common/mixins";
import { applyThemeMixin } from "../globals/theme/mixins";

const StyledPageLogin = styled.main`
    ${applyThemeMixin("login")}
    ${flexCenterMixin()}
    width: 100vw;
    height: 100vh;
`;

export default StyledPageLogin;
