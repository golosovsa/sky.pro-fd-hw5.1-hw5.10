import styled from 'styled-components'

export const TrackListItemNameStyled = styled.p`
  ${(props) => props.theme.applyColors('track-list-item-name')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.theme.width(396)};
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const TrackListItemExtraNameStyled = styled.p`
  ${(props) => props.theme.applyColors('track-list-item-extra-name')}
  margin-left: ${(props) => props.theme.width(6)};
`
