import styled, { keyframes } from "styled-components";
import { layoutSizeMixin, calcWidth } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";

const shineDuration = "5s";

const Skeleton = styled.div`
    ${applyThemeMixin("main", "sceleton")}
    ${(props) => layoutSizeMixin(props.width || "100", props.height || "100")}
    animation: ${(props) => keyframes`
        0%{
            background-position: ${calcWidth(
                -1920 - (Number(props.animationOffset) || 0)
            )};
        }
        100% {
            background-position: ${calcWidth(
                1920 * 2 - (Number(props.animationOffset) || 0)
            )};
        }
    `} ${shineDuration} infinite linear;
    background-size: ${calcWidth(1920 * 3)} 1px;
`;

export default Skeleton;
