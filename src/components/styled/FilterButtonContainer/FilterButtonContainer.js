import styled from "styled-components";
import { calcHeight } from "../../../globals/layout";

const FilterButtonContainer = styled.div`
    position: relative;
    left: 0;
    top: 0;
`;

FilterButtonContainer.Tab = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;

FilterButtonContainer.Popup = styled.div`
    position: relative;
    left: 0;
    top: ${calcHeight(10)};
`;

export default FilterButtonContainer;