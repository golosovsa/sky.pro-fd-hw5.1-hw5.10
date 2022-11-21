import styled, { css } from "styled-components";
import logoImageBlack from "./logo-black.svg";
import logoImageWhite from "./logo-white.svg";
import { layoutSizeMixin } from "../../../globals/layout/index";

const Logo = styled.div`
    ${layoutSizeMixin(140, 21)}
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    ${(props) => {
        if (props.white) {
            return css`
                background-image: url(${logoImageWhite});
            `;
        }

        return css`
            background-image: url(${logoImageBlack});
        `;
    }}
`;

export default Logo;
