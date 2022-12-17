import styled from 'styled-components'

export const TrackListItemIconStyled = styled.div`
  ${(props) => props.theme.applyColors('track-list-item-icon')}
  ${(props) => props.theme.applySize(51, 51)}
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-right: ${(props) => props.theme.width(4)};
  padding-top: ${(props) => props.theme.height(2)};
`
