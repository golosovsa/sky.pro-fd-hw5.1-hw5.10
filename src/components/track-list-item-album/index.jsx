import styled from 'styled-components'

const TrackListItemAlbum = styled.p`
  ${(props) => props.theme.applyColors('track-list-item-album')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.theme.width(229)};
`

export default TrackListItemAlbum
