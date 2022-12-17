import styled from 'styled-components'

const TrackListHeaderLabel = styled.p`
  ${(props) => props.theme.applyColors('track-list-header-label')}
  ${(props) => props.theme.applyFont(14, 24, 400)}
  letter-spacing: ${(props) => props.theme.width(2)};
  font-feature-settings: 'pnum' on, 'lnum' on;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
`

export default TrackListHeaderLabel
