import styled from 'styled-components'
import { ReactComponent as SVGNext } from './next.svg'

export const NextIcon = styled(SVGNext)`
  ${(props) => props.theme.applyColors('next-icon')}
  ${(props) => props.theme.applySize(15, 14)}
  transition: color 0.3s linear, fill 0.3s linear;
`
