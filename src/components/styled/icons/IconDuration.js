import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as duration } from "./duration.svg";

const IconDuration = styled(duration)`
    ${applyThemeMixin("main", "iconDuration")}
    ${layoutSizeMixin(12, 12)}
`;

export default IconDuration;
