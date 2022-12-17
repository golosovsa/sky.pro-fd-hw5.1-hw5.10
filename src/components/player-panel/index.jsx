import PlayerPanelText from '../player-panel-text'
import TrackListItemIcon from '../track-list-item-icon'
import {
  PlayerLikeButtonsContainer,
  PlayerPanelButtonsContainer,
  PlayerPanelMuteControlContainer,
  PlayerTrackInfoContainer,
  PlayerTrackInfoNameAndAuthorContainer
} from './container'
import { PlayerPanelStyled } from './style'

const PlayerPanel = ({ buttons, likeButtons, name, author, muteControl }) => {
  return (
    <PlayerPanelStyled>
      <PlayerPanelButtonsContainer>{buttons}</PlayerPanelButtonsContainer>
      <PlayerTrackInfoContainer>
        <TrackListItemIcon />
        <PlayerTrackInfoNameAndAuthorContainer>
          <PlayerPanelText>{name}</PlayerPanelText>
          <PlayerPanelText>{author}</PlayerPanelText>
        </PlayerTrackInfoNameAndAuthorContainer>
      </PlayerTrackInfoContainer>
      <PlayerLikeButtonsContainer>{likeButtons}</PlayerLikeButtonsContainer>
      <PlayerPanelMuteControlContainer>{muteControl}</PlayerPanelMuteControlContainer>
    </PlayerPanelStyled>
  )
}

export default PlayerPanel
