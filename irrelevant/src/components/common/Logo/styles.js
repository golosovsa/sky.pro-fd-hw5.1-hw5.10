import styled, { css } from "styled-components";
import logoImageBlack from "../../../img/logo-black.svg";
import logoImageWhite from "../../../img/logo-white.svg";
import { layoutSizeMixin } from "../../globals/layout/mixins";

const StyledLogo = styled.div`
    ${layoutSizeMixin(140, 21)}
    background-image: url(${logoImageBlack});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    ${ props => (props.color === "white") && css`
        background-image: url(${logoImageWhite});
    `}
`;

export default StyledLogo;
