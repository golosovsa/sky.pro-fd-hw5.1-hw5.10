import {
  LoadingErrorButtonContainer,
  LoadingErrorContainer,
  LoadingErrorTextContainer
} from './container'
import Icons from '../icons'
import { LoadingErrorHeader, LoadingErrorText } from './style'
import LoginSubmit from '../login-submit'

const LoadingError = ({ resetErrorBoundary }) => {
  return (
    <LoadingErrorContainer>
      <Icons.SmileSad />
      <LoadingErrorTextContainer>
        <LoadingErrorHeader>Ошибка загрузки</LoadingErrorHeader>
        <LoadingErrorText>Проверьте подключение к сети и повторите попытку</LoadingErrorText>
      </LoadingErrorTextContainer>
      <LoadingErrorButtonContainer>
        <LoginSubmit value="Повторить" onClick={resetErrorBoundary} />
      </LoadingErrorButtonContainer>
    </LoadingErrorContainer>
  )
}

export default LoadingError
