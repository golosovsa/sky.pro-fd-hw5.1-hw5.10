import styled from "styled-components";
import StyledButton from "../Button/styles";
import { applyThemeMixin } from "../../globals/theme/mixins";
import { calcHeight } from "../../globals/layout/funcs";

const StyledSubmit = styled(StyledButton)`
    ${applyThemeMixin("login", "submit")}
    margin-top: ${calcHeight(40)};
`;

export default StyledSubmit;