import styled from "styled-components";
import { layoutSizeMixin } from "../../../globals/layout";
import { applyThemeMixin } from "../../../globals/theme";
import { ReactComponent as search } from "./search.svg";

const IconSearch = styled(search)`
    ${applyThemeMixin("main", "iconSearch")}
    ${layoutSizeMixin(17, 17)}
`;

export default IconSearch;
