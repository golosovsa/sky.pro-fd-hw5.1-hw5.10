import styled from 'styled-components'

const TrackListItemAuthor = styled.p`
  ${(props) => props.theme.applyColors('track-list-item-author')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.theme.width(304)};
`

export default TrackListItemAuthor
