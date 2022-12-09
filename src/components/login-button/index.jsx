import styled from 'styled-components'

const LoginButton = styled.input.attrs({ type: 'button' })`
  ${(props) => props.theme.applyColor('login-button')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  height: ${(props) => props.theme.calcHeight(52)};
  border-radius: min(
    ${(props) => props.theme.calcWidth(6)},
    ${(props) => props.theme.calcHeight(6)}
  );
`
export default LoginButton
