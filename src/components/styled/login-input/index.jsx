import styled from 'styled-components'

export const LoginInputStyled = styled.input`
  ${(props) => props.theme.applyColor('login-input-text')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
  padding-top: ${(props) => props.theme.calcHeight(8)};
  padding-bottom: ${(props) => props.theme.calcHeight(8)};
  border-bottom-style: solid;
  border-bottom-width: ${(props) => props.theme.calcHeight(1)};
`
