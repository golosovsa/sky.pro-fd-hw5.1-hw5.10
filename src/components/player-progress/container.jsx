import styled from 'styled-components'

export const PlayerProgressContainer = styled.div`
  ${(props) => props.theme.applyColors('player-progress-container')}
  width: 100%;
  height: ${(props) => props.theme.height(5)};
  cursor: pointer;
`
