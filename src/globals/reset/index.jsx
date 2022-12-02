import { createGlobalStyle } from 'styled-components'

export const ResetStyles = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  body {
    overflow: hidden;
  }
`
