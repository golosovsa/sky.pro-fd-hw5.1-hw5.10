import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useLoginMutation, useSignupMutation, useTokenMutation } from '../../app/services/user'
import LoginButton from '../../components/login-button'
import LoginForm from '../../components/login-form'
import LoginInput from '../../components/login-input'
import LoginSubmit from '../../components/login-submit'

function LoginFeature() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  const [signUp, { isLoading: isSignUpReceiving, isSuccess: isSingUpSuccess }] = useSignupMutation()
  const [signIn, { isLoading: isSignInReceiving, isSuccess: isSignInSuccess }] = useLoginMutation()
  const [receiveToken, { isLoading: isTokenReceiving, isSuccess: isTokenSuccess }] =
    useTokenMutation()

  useEffect(() => {
    if (isSingUpSuccess) {
      setPassword('')
      setRepeatedPassword('')
      setIsSignUp(false)
    }
  }, [isSingUpSuccess])

  useEffect(() => {
    if (isSignInSuccess) {
      receiveToken({
        username,
        email: `${username}@mail.ru`,
        password
      })
    }
  }, [isSignInSuccess])

  const handleSignUp = () => {
    signUp({
      username,
      email: `${username}@mail.ru`,
      password
    })
  }

  const handleSignIn = () => {
    signIn({
      username,
      email: `${username}@mail.ru`,
      password
    })
  }

  const handleOnSignUpClick = () => {
    setIsSignUp(true)
  }

  const handleOnSubmit = () => {
    if (isSignUp) {
      handleSignUp()
    } else {
      handleSignIn()
    }
  }

  if (isTokenSuccess) {
    return <Navigate to="/" />
  }

  const inputs = (
    <>
      <LoginInput
        name="login"
        placeholder="Логин"
        autoComplete="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <LoginInput
        type="password"
        name="password"
        placeholder="Пароль"
        autoComplete={isSignUp ? 'new-passport' : 'current-password'}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {isSignUp && (
        <LoginInput
          type="password"
          name="password-repeat"
          placeholder="Повторите пароль"
          autoComplete={isSignUp ? 'new-passport' : 'current-password'}
          value={repeatedPassword}
          onChange={(event) => setRepeatedPassword(event.target.value)}
        />
      )}
    </>
  )

  const buttons = (
    <>
      <LoginSubmit value={isSignUp ? 'Зарегистрироваться' : 'Войти'} onClick={handleOnSubmit} />
      {!isSignUp && <LoginButton value="Зарегистрироваться" onClick={handleOnSignUpClick} />}
    </>
  )

  return (
    <LoginForm
      inputs={inputs}
      buttons={buttons}
      disabled={isSignUpReceiving || isSignInReceiving || isTokenReceiving}
    />
  )
}

export default LoginFeature
