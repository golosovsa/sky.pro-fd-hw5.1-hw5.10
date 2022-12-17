import styled from 'styled-components'
import { ReactComponent as SVGTTrack } from './track.svg'

export const TrackIcon = styled(SVGTTrack)`
  ${(props) => props.theme.applyColors('track-icon')}
  ${(props) => props.theme.applySize(18, 17)}
`
