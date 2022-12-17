import LoginFeature from '../../features/login'
import ErrorsFeature from '../../features/errors'
import { authErrorsSelector } from '../../app/store/selectors/auth'
import { hideError } from '../../app/store/slices/auth'

const Login = () => {
  return (
    <>
      <LoginFeature />
      <ErrorsFeature selector={authErrorsSelector} reducer={hideError} />
    </>
  )
}

export default Login
