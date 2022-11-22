import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as brokenHeart } from "./broken-heart.svg";

const IconBrokenHeart = styled(brokenHeart)`
    ${(props) => !props.selected && applyThemeMixin("main", "iconBrokenHeart")}
    ${(props) =>
        props.selected && applyThemeMixin("main", "iconBrokenHeartSelected")}
    ${layoutSizeMixin(15, 13)}
    transition: color 0.2s linear, fill 0.2s linear;
`;

export default IconBrokenHeart;
