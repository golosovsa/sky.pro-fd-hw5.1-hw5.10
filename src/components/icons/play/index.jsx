import styled from 'styled-components'
import { ReactComponent as SVGPlay } from './play.svg'

export const PlayIcon = styled(SVGPlay)`
  ${(props) => props.theme.applyColors('play-icon')}
  ${(props) => props.theme.applySize(22, 20)}
  transition: color 0.3s linear, fill 0.3s linear;
`
