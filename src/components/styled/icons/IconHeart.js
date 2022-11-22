import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as heart } from "./heart.svg";

const IconHeart = styled(heart)`
    ${(props) => !props.selected && applyThemeMixin("main", "iconHeart")}
    ${(props) => props.selected && applyThemeMixin("main", "iconHeartSelected")}
    ${layoutSizeMixin(15, 12)}
    transition: color 0.2s linear, fill 0.2s linear;
`;

export default IconHeart;
