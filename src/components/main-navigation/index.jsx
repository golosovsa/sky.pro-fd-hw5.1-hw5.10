import { useState } from 'react'
import { BurgerContainer, BurgerIconContainer } from './container'
import { MainNavigationStyled } from './style'

const MainNavigation = ({ permanent, icon, children }) => {
  const [shown, setShown] = useState(false)

  const handleShowBurger = () => setShown(!shown)

  return (
    <MainNavigationStyled>
      {permanent}
      <BurgerIconContainer onClick={handleShowBurger}>{icon}</BurgerIconContainer>
      <BurgerContainer shown={shown}>{children}</BurgerContainer>
    </MainNavigationStyled>
  )
}

export default MainNavigation
