import PlayerFader from '../player-fader'
import PlayerPanel from '../player-panel'
import { PlayerContainer } from './container'

const Player = ({ progress, controlButtons, likeButtons, track, muteControl }) => {
  if (!track) {
    return (
      <PlayerContainer>
        <PlayerFader />
      </PlayerContainer>
    )
  }

  return (
    <PlayerContainer>
      <PlayerFader />
      {progress}
      <PlayerPanel
        buttons={controlButtons}
        likeButtons={likeButtons}
        name={track.name}
        author={track.author}
        muteControl={muteControl}
      />
    </PlayerContainer>
  )
}

export default Player
