import styled from "styled-components";
import { ReactComponent as logo } from "./logo.svg";
import { layoutSizeMixin } from "../../../globals/layout/index";
import { applyThemeMixin } from "../../../globals/theme";

const Logo = styled(logo)`
    ${layoutSizeMixin(140, 21)}
`;

const LoginLogo = styled(Logo)`
    ${applyThemeMixin("login", "logo")}
`;

const MainLogo = styled(Logo)`
    ${applyThemeMixin("main", "logo")}
`;

export { LoginLogo, MainLogo };
