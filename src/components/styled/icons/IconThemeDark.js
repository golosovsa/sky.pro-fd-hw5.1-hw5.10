import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as themeDark } from "./theme-dark.svg";

const IconThemeDark = styled(themeDark)`
    ${applyThemeMixin("main", "iconThemeDark")}
    ${layoutSizeMixin(39, 39)}
    transition: color 0.2s linear, fill 0.2s linear;
`;

export default IconThemeDark;
