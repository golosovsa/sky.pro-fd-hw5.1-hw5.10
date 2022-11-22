import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as shuffle } from "./shuffle.svg";

const IconShuffle = styled(shuffle)`
    ${(props) => !props.selected && applyThemeMixin("main", "iconShuffle")}
    ${(props) =>
        props.selected && applyThemeMixin("main", "iconShuffleSelected")}
    ${layoutSizeMixin(19, 12)}
    transition: color 0.2s linear, fill 0.2s linear;
`;

export default IconShuffle;
