import styled from 'styled-components'
import { ReactComponent as SVGIndieCharge } from './indie-charge.svg'

export const IndieCharge = styled(SVGIndieCharge)`
  ${(props) => props.theme.applyColors('aside-item')}
  ${(props) => props.theme.applySize(250, 150)}
`
