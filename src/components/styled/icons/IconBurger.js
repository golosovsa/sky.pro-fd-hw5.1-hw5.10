import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as burger } from "./burger.svg";

const IconBurger = styled(burger)`
    ${applyThemeMixin("main", "iconBurger")}
    ${layoutSizeMixin(20, 10)}
`;

export default IconBurger;