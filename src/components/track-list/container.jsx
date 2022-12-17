import styled from 'styled-components'

export const TrackListContainer = styled.div`
  ${(props) => props.theme.applyColors('track-list-container')}
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 0 auto;
`

export const TrackListEmptySpaceContainer = styled.div`
  ${(props) => props.theme.applyColors('track-list-container')}
  flex: 1 0 auto;
  height: ${(props) => props.theme.height(122)};
`
