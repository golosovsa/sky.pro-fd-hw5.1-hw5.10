import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as stop } from "./stop.svg";

const IconStop = styled(stop)`
    ${applyThemeMixin("main", "iconStop")}
    ${layoutSizeMixin(22, 22)}
    transition: color 0.2s linear, fill 0.2s linear;
`;

export default IconStop;
