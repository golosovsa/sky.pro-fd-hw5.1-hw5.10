import styled from "styled-components";
import { applyThemeMixin } from "../../globals/theme/mixins";
import { layoutSizeMixin } from "../../globals/layout/mixins";
import { calcHeight, calcWidth } from "../../globals/layout/funcs";
import { flexMixin } from "../../common/mixins";

const StyledForm = styled.form`
    ${applyThemeMixin("login", "form")}
    ${layoutSizeMixin(366, 439)}
    ${flexMixin("column nowrap", "space-between", "center", "center")}
    padding: ${calcHeight(45)} ${calcWidth(44)};
    border-radius: min(${calcWidth(12)}, ${calcHeight(12)});
`;

export default StyledForm;