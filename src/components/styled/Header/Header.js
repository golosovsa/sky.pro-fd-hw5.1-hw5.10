import styled from "styled-components";
import { applyThemeMixin } from "../../../globals/theme";
import { layoutTextMixin } from "../../../globals/layout";

const Header = styled.h1`
    ${applyThemeMixin("main", "header")}
    ${layoutTextMixin(60, 64, 400)}
`;

export default Header;
