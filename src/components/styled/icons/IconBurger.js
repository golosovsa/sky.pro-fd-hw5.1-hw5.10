import styled from "styled-components";
import { layoutSizeMixin, calcHeight } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as burger } from "./burger.svg";

const IconBurger = styled(burger)`
    ${applyThemeMixin("main", "iconBurger")}
    ${layoutSizeMixin(20, 10)}
    transition: color 0.2s linear, transform 0.2s linear;
    &:hover {
        transform: scaleY(1.15);
    }
    &:active {
        transform: scaleY(1.3); 
    }
    margin-top: ${calcHeight(46)};
    margin-bottom: ${calcHeight(36)};
`;

export default IconBurger;
