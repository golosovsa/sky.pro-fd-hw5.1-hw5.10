import { createGlobalStyle } from "styled-components";

const layoutWidth = 1920;
const layoutHeight = 1080;
const layoutAspect = layoutWidth / layoutHeight;

const GlobalLayout = createGlobalStyle`
:root {
    --layout-width: ${layoutWidth};
    --layout-height: ${layoutHeight};
    --layout-aspect: ${layoutAspect};

    --page-width: ${layoutWidth};
    --page-height: ${layoutHeight};
}

@media (orientation: landscape) {
    :root {
        --page-width: calc(100vh * var(--layout-aspect));
        --page-height: 100vh;
    }
}

@media (orientation: portrait) {
    :root {
        --page-width: 100vw;
        --page-height: calc(100vw / var(--layout-aspect));
    }
}
`;

export default GlobalLayout;
