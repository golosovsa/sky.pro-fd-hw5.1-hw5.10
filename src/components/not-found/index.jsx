import { useNavigate } from 'react-router-dom'
import Icons from '../icons'
import LoginSubmit from '../login-submit'
import NotFoundSubTitle from '../not-found-sub-title'
import NotFoundText from '../not-found-text'
import NotFoundTitle from '../not-found-title'
import {
  NotFoundButtonContainer,
  NotFoundContainer,
  NotFoundSubTitleContainer,
  NotFoundTextContainer
} from './container'

const NotFoundBlock = () => {
  const navigate = useNavigate()
  return (
    <NotFoundContainer>
      <NotFoundTitle>424</NotFoundTitle>
      <NotFoundSubTitleContainer>
        <NotFoundSubTitle>
          Страница не найдена <Icons.SmileCrying width={52} height={52} />
        </NotFoundSubTitle>
      </NotFoundSubTitleContainer>
      <NotFoundTextContainer>
        <NotFoundText>Возможно, она была удалена или перенесена на другой адрес</NotFoundText>
      </NotFoundTextContainer>
      <NotFoundButtonContainer>
        <LoginSubmit onClick={() => navigate('/')} value="Вернуться на главную" />
      </NotFoundButtonContainer>
    </NotFoundContainer>
  )
}

export default NotFoundBlock
