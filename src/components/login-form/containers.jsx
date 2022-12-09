import styled, { css } from 'styled-components'

export const LoginFormContainer = styled.div`
  ${(props) => props.theme.applyColors('login-form-container')}
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
`

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const InputsContainer = styled.fieldset`
  display: flex;
  flex-flow: column nowrap;
  align-content: space-between;
  align-items: stretch;
  justify-content: space-between;
  row-gap: ${(props) => props.theme.height(30)};
  border: none;
`

export const ButtonsContainer = styled.fieldset`
  display: flex;
  flex-flow: column nowrap;
  align-content: space-between;
  align-items: stretch;
  justify-content: space-between;
  row-gap: ${(props) => props.theme.height(20)};
  border: none;
`
