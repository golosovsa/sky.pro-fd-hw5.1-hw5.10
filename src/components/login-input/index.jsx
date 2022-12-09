import styled from 'styled-components'

const LoginInputStyled = styled.input.attrs({ type: 'text' })`
  ${(props) => props.theme.applyColor('login-input-text')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  padding-top: ${(props) => props.theme.calcHeight(8)};
  padding-bottom: ${(props) => props.theme.calcHeight(8)};
  border-bottom-style: solid;
  border-bottom-width: ${(props) => props.theme.calcHeight(1)};
`
export default LoginInputStyled
