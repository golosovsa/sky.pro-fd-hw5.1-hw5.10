import { createGlobalStyle } from 'styled-components'
import { LAYOUT_ASPECT, LAYOUT_HEIGHT, LAYOUT_WIDTH } from '../constants'

export const ResponsibleLayout = createGlobalStyle`
  :root {
    --layout-width: ${LAYOUT_WIDTH};
    --layout-height: ${LAYOUT_HEIGHT};
    --layout-aspect: ${LAYOUT_ASPECT};

    --page-width: 100vw;
    --page-height: calc(100vw / var(--layout-aspect));
  }

  /* @media (orientation: portrait) {
    :root {
        --page-width: calc(100vh * var(--layout-aspect));
        --page-height: 100vh;
    }
  }

  @media (orientation: landscape) {
    :root {
        --page-width: 100vw;
        --page-height: calc(100vw / var(--layout-aspect));
    }
  } */
`
