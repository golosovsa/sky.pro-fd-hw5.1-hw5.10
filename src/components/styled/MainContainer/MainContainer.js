import styled from "styled-components";
import { calcWidth, calcHeight } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";

const MainContainer = styled.main`
    ${applyThemeMixin("main")}
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: ${calcWidth(244)} auto ${calcWidth(333)};
`;

MainContainer.Nav = styled.nav`
    padding-top: ${calcHeight(33)};
    padding-left: ${calcWidth(36)};
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    ${props => props.isMenuShown && applyThemeMixin("main", "activeMenu")}
    transition: background-color 0.3s linear;
`;

MainContainer.Content = styled.article`
    padding: ${calcHeight(33)} 0 0 ${calcWidth(50)};
`;

MainContainer.ASide = styled.div`
    padding-top: ${calcHeight(384)};
`;

export default MainContainer;