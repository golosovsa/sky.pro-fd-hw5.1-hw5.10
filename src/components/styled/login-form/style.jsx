import styled from 'styled-components'

export const LoginFormStyled = styled.form`
  ${(props) => props.theme.applyColor('login-form')}
  ${(props) => props.theme.applySize(366, 439)}

  border-radius: min(${(props) => props.theme.calcWidth(12)}, ${(props) =>
    props.theme.calcHeight(12)});
`
