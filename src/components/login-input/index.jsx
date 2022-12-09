import styled from 'styled-components'

const LoginInput = styled.input`
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  padding-top: ${(props) => props.theme.height(8)};
  padding-bottom: ${(props) => props.theme.height(8)};
  border: none;
  border-bottom-style: solid;
  border-bottom-width: ${(props) => props.theme.height(1)};
  background-image: none;
  box-shadow: none;
  outline: none;
  ${(props) => props.theme.applyColors('login-input-text')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
`
export default LoginInput
