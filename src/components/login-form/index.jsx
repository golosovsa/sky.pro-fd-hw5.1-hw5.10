import { ButtonsContainer, InputsContainer, LoginFormContainer, LogoContainer } from './containers'
import { LoginFormStyled } from './style'
import Icons from '../icons'

const emptySubmit = (e) => e.preventDefault()

const LoginForm = ({ inputs, buttons, onSubmit = emptySubmit, disabled = false }) => {
  return (
    <LoginFormContainer disabled={disabled}>
      <LoginFormStyled onSubmit={onSubmit}>
        <LogoContainer>
          <Icons.LoginLogo />
        </LogoContainer>
        <InputsContainer disabled={disabled}>{inputs}</InputsContainer>
        <ButtonsContainer disabled={disabled}>{buttons}</ButtonsContainer>
      </LoginFormStyled>
    </LoginFormContainer>
  )
}

export default LoginForm
