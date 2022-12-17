import styled from 'styled-components'

export const PlayerPanelStyled = styled.div`
  ${(props) => props.theme.applyColors('player-panel')}
  height: ${(props) => props.theme.height(72)};
  display: flex;
  flex-flow: row nowrap;
`
