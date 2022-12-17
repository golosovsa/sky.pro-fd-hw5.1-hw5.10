import styled from 'styled-components'

export const PlayerPanelButtonsContainer = styled.div`
  ${(props) => props.theme.applyColors('player-panel-buttons-container')}
  width: ${(props) => props.theme.width(294)};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
`

export const PlayerTrackInfoContainer = styled.div`
  ${(props) => props.theme.applyColors('player-panel-buttons-container')}
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: ${(props) => props.theme.width(17)};
`

export const PlayerTrackInfoNameAndAuthorContainer = styled.div`
  ${(props) => props.theme.applyColors('player-panel-buttons-container')}
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  row-gap: ${(props) => props.theme.height(8)};
`
export const PlayerLikeButtonsContainer = styled.div`
  ${(props) => props.theme.applyColors('player-panel-buttons-container')}
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(props) => props.theme.width(30)};
  column-gap: ${(props) => props.theme.width(30)};
`

export const PlayerPanelMuteControlContainer = styled.div`
  ${(props) => props.theme.applyColors('player-panel-mute-control-container')}
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  margin-left: ${(props) => props.theme.width(65)};
  margin-right: ${(props) => props.theme.width(65)};
  column-gap: ${(props) => props.theme.width(17)};
  flex-grow: 1;
`
