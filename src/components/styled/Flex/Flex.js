import styled, { css } from "styled-components";
import { calcWidth, calcHeight } from "../../../globals/layout";

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    flex-wrap: ${props => props.direction || "nowrap"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
    align-content: ${props => props.alignContent || "center"};
    row-gap: ${props => calcHeight(props.rowGap) || "0"};
    column-gap: ${props => calcWidth(props.columnGap) || "0"};
    ${props => props.stretch && css`
        width: 100%;
    `}
`;

export default Flex;
