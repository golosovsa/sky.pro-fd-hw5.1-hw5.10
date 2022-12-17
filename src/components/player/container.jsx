import styled from 'styled-components'

export const PlayerContainer = styled.div`
  ${(props) => props.theme.applyColors('player-container')}
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
`
