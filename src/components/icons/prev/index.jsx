import styled from 'styled-components'
import { ReactComponent as SVGPrev } from './prev.svg'

export const PrevIcon = styled(SVGPrev)`
  ${(props) => props.theme.applyColors('prev-icon')}
  ${(props) => props.theme.applySize(15, 14)}
  transition: color 0.3s linear, fill 0.3s linear;
`
