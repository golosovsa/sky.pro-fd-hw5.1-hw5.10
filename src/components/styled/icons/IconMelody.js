import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as melody } from "./melody.svg";

const IconMelody = styled(melody)`
    ${applyThemeMixin("main", "iconMelody")}
    ${layoutSizeMixin(18, 18)}
`;

export default IconMelody;
