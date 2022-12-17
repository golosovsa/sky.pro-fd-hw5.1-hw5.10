import styled from 'styled-components'

const LoginSubmit = styled.input.attrs({ type: 'submit' })`
  ${(props) => props.theme.applyColors('login-submit')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  height: ${(props) => props.theme.height(52)};
  border-radius: min(${(props) => props.theme.width(6)}, ${(props) => props.theme.height(6)});
  border: none;
  background-image: none;
  box-shadow: none;
  outline: none;
  transition: background-color 0.2s linear;
`

export default LoginSubmit
