import styled from 'styled-components'
import { ReactComponent as SVGMute } from './mute.svg'

export const MuteIcon = styled(SVGMute)`
  ${(props) => props.theme.applyColors('mute-icon')}
  ${(props) => props.theme.applySize(13, 18)}
`
