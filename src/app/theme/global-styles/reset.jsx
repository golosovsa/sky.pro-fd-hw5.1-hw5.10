import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
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

  /* input, input:hover,
  input[type="text"], input[type="text"]:hover,
  input[type="button"], input[type="button"]:hover,
  input[type="submit"], input[type="submit"]:hover,
  button, button:hover,
  button[disabled], button[disabled]:hover {
    border: none;
    background-image:none;
    background-color:transparent;
    box-shadow: none;
    outline: none;
  } */
`
