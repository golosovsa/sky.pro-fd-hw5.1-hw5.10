import styled from "styled-components";
import { layoutTextMixin, calcWidth } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";

const FilterContainer = styled.div`
    ${applyThemeMixin("main", "filter")}
    ${layoutTextMixin(16, 18, 400)}
    letter-spacing: 0.001em;
    font-feature-settings: "pnum" on, "lnum" on;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
    column-gap: ${calcWidth(15)};
    white-space: nowrap;
`;

FilterContainer.Buttons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
    column-gap: ${calcWidth(15)};
`;

export default FilterContainer;
