import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  ${(props) => props.theme.applyColor('login-form-container')}
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: space-between;
  align-items: stretch;
  justify-content: space-between;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: space-between;
  align-items: stretch;
  justify-content: space-between;
`
