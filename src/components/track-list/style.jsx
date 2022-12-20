import styled from 'styled-components'

export const TrackListStyled = styled.div`
  ${(props) => props.theme.applyColors('track-list-styled')}
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  overflow-y: scroll;
  flex: 1 1 auto;
  row-gap: ${(props) => props.theme.width(12)};
  height: calc(100vh - ${(props) => props.theme.height(329 + 78)});
  &::-webkit-scrollbar {
    display: none;
  }
`
