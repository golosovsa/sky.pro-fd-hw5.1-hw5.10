import styled from 'styled-components'

export const TrackListItemStyled = styled.div`
  ${(props) =>
    props.selected
      ? props.theme.applyColors('track-list-item-selected')
      : props.theme.applyColors('track-list-item')}
  display: flex;
  flex-flow: row nowrap;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: ${(props) => props.theme.width(17)};
`
