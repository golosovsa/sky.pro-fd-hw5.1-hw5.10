import styled from 'styled-components'
import { ReactComponent as SVGBurger } from './burger.svg'

export const BurgerIcon = styled(SVGBurger)`
  ${(props) => props.theme.applyColors('burger-icon')}
  ${(props) => props.theme.applySize(20, 12)}
  transition: color 0.2s linear, transform 0.2s linear;
  &:hover {
    transform: scaleY(1.2);
  }
  &:active {
    transform: scaleY(1.4);
  }
`
