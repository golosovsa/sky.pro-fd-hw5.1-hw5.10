import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as play } from "./play.svg";

const IconPlay = styled(play)`
    ${applyThemeMixin("main", "iconPlay")}
    ${layoutSizeMixin(22, 22)}
    transition: color 0.2s linear, fill 0.2s linear;
`;

export default IconPlay;
