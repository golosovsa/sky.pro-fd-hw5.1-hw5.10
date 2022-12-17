import styled from 'styled-components'
import { ReactComponent as SVGStop } from './stop.svg'

export const StopIcon = styled(SVGStop)`
  ${(props) => props.theme.applyColors('stop-icon')}
  ${(props) => props.theme.applySize(15, 19)}
  transition: color 0.3s linear, fill 0.3s linear;
`
