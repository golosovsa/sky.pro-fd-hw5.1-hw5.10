import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as volume } from "./volume.svg";

const IconVolume = styled(volume)`
    ${applyThemeMixin("main", "iconVolume")}
    ${layoutSizeMixin(13, 18)}
`;

export default IconVolume;
