import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as replay } from "./replay.svg";

const IconReplay = styled(replay)`
    ${(props) => !props.selected && applyThemeMixin("main", "iconReplay")}
    ${(props) =>
        props.selected && applyThemeMixin("main", "iconReplaySelected")}
    ${layoutSizeMixin(18, 12)}
    transition: color 0.2s linear, fill 0.2s linear;
`;

export default IconReplay;
