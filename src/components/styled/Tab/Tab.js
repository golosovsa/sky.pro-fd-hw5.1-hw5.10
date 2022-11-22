import styled from "styled-components";
import { layoutSizeMixin, layoutTextMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";

const Tab = styled.div`
    ${layoutSizeMixin(26, 26)}
    ${layoutTextMixin(13, 13, 400)}
    ${applyThemeMixin("main", "tab")}
    border-radius: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export default Tab;