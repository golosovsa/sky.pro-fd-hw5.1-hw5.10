import styled from 'styled-components'

export const TrackListItemSkeletonStyled = styled.div`
  ${(props) => props.theme.applyColors('track-list-item-skeleton')}
  display: flex;
  flex-flow: row nowrap;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: ${(props) => props.theme.width(17)};
`
