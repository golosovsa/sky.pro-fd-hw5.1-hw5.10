import styled from 'styled-components'
import { ReactComponent as SVGClock } from './clock.svg'

export const ClockIcon = styled(SVGClock)`
  ${(props) => props.theme.applyColors('clock-icon')}
  ${(props) => props.theme.applySize(12, 13)}
`
