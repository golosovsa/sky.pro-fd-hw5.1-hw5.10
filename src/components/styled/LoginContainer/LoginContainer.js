import styled from "styled-components";
import { applyThemeMixin } from "../../../globals/theme";

const LoginContainer = styled.main`
    ${applyThemeMixin("login")}
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export default LoginContainer;