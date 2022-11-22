import styled from "styled-components";
import { applyThemeMixin } from "../../../globals/theme";

const MainContainer = styled.main`
    ${applyThemeMixin("main")}
    width: 100vw;
    height: 100vh;
`;

export default MainContainer;