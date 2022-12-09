import styled from 'styled-components'

export const LoginFormStyled = styled.form`
  ${(props) => props.theme.applyColors('login-form')}
  ${(props) => props.theme.applySize(366, 439)}
  border-radius: min(${(props) => props.theme.width(12)}, ${(props) => props.theme.height(12)});
  padding: ${(props) => props.theme.height(45)} ${(props) => props.theme.width(45)};
  display: flex;
  flex-flow: column nowrap;
  align-content: stretch;
  justify-content: space-between;
  align-items: stretch;
`
