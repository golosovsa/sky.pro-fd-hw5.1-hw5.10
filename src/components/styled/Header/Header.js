import styled from "styled-components";
import { applyThemeMixin } from "../../../globals/theme";
import { layoutTextMixin, calcHeight } from "../../../globals/layout";

const Header = styled.h1`
    ${applyThemeMixin("main", "header")}
    ${layoutTextMixin(60, 64, 400)}
    margin-top: ${calcHeight(51)};
    margin-bottom: ${calcHeight(45)};
`;

export default Header;
