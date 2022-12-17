import styled from 'styled-components'

const TrackListItemTime = styled.p`
  ${(props) => props.theme.applyColors('track-list-item-time')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.theme.width(60)};
`

export default TrackListItemTime
