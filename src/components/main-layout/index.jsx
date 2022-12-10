import { ASideContainer, ContentContainer, NavigationContainer } from './container'
import { MainLayoutStyled } from './style'

const MainLayout = ({ navigation, content, aside }) => {
  return (
    <MainLayoutStyled>
      <NavigationContainer>{navigation}</NavigationContainer>
      <ContentContainer>{content}</ContentContainer>
      <ASideContainer>{aside}</ASideContainer>
    </MainLayoutStyled>
  )
}

export default MainLayout
