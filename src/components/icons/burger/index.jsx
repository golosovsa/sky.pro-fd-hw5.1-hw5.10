import styled from 'styled-components'
import { ReactComponent as SVGBurger } from './burger.svg'

export const BurgerIcon = styled(SVGBurger)`
  ${(props) => props.theme.applyColors('burger-icon')}
  ${(props) => props.theme.applySize(140, 21)}
`
