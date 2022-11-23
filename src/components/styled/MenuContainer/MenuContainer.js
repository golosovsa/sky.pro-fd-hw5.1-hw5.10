import styled, { css } from "styled-components";
import { calcHeight, layoutTextMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";

const MenuContainer = styled.div`
    ${(props) =>
        !props.isMenuShown &&
        css`
            display: none;
        `}

    ${(props) =>
        props.isMenuShown &&
        css`
            display: flex;
            flex-flow: column nowrap;
            row-gap: ${calcHeight(26)};
        `}
`;

const StyledMenuItem = styled.div`
    ${applyThemeMixin("main", "menuItem")}
    ${layoutTextMixin(16, 18, 400)}
    letter-spacing: 0.001em;
    font-feature-settings: "pnum" on, "lnum" on;
    transition: color 0.2s linear;

`;

function MenuItem({children}) {
    return <StyledMenuItem>{children}</StyledMenuItem>;
}

MenuContainer.Item = MenuItem;

export default MenuContainer;
