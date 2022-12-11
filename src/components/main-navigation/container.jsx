import styled from 'styled-components'

export const BurgerIconContainer = styled.div`
  margin-top: ${(props) => props.theme.height(10)};
`

export const BurgerContainer = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: ${(props) => props.theme.height(26)};
  position: relative;
  left: ${(props) => (props.shown ? 0 : props.theme.width(-244))};
  transition: left 0.3s linear;
`

export const BackgroundContainer = styled.div`
  ${(props) => props.theme.applyColors('main-burger-menu')}
  position: fixed;
  left: ${(props) => (props.shown ? 0 : props.theme.width(-244))};
  top: 0;
  width: ${(props) => props.theme.width(244)};
  height: 100vh;
  z-index: -1;
  transition: left 0.3s linear;
`
