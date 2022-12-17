import styled from 'styled-components'

export const PlayerPanelMuteContainer = styled.div`
  ${(props) => props.theme.applyColors('player-panel-mute-container')}
  ${(props) => props.theme.applySize(109, 2)}
`
