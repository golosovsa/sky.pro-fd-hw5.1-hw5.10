import { useState } from 'react'
import Icons from '../icons'
import { BackgroundContainer, BurgerContainer } from './container'
import { MainNavigationStyled } from './style'

const MainNavigation = ({ permanent, children }) => {
  const [shown, setShown] = useState(false)

  const handleShowBurger = () => setShown(!shown)

  return (
    <MainNavigationStyled>
      {permanent}
      <Icons.Burger onClick={handleShowBurger} />
      <BurgerContainer shown={shown}>{children}</BurgerContainer>
      <BackgroundContainer shown={shown}></BackgroundContainer>
    </MainNavigationStyled>
  )
}

export default MainNavigation
