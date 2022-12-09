import { ButtonsContainer, InputsContainer, LoginFormContainer } from './containers'
import { LoginFormStyled } from './style'
import { Icons } from '../icons'

const emptySubmit = (e) => e.preventDefault()

const LoginForm = ({ inputs, buttons, onSubmit = emptySubmit }) => {
  return (
    <LoginFormContainer>
      <LoginFormStyled onSubmit={onSubmit}>
        <Icons.LoginLogo />
        <InputsContainer>{inputs}</InputsContainer>
        <ButtonsContainer>{buttons}</ButtonsContainer>
      </LoginFormStyled>
    </LoginFormContainer>
  )
}

export default LoginForm
