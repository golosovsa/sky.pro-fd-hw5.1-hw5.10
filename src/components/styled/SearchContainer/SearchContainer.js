import styled from "styled-components";
import { calcWidth, calcHeight } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";

const SearchContainer = styled.div`
    ${applyThemeMixin("main", "search")}
    padding-bottom: ${calcHeight(14)};
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: ${calcHeight(1)};
`;

SearchContainer.Icon = styled.div`
    margin-left: ${calcWidth(9)};
    margin-right: ${calcWidth(16)};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export default SearchContainer;