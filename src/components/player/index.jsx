import PlayerFader from '../player-fader'
import PlayerPanel from '../player-panel'
import PlayerProgress from '../player-progress'
import { PlayerContainer } from './container'
import Icons from '../icons'
import PlayerPanelMute from '../player-panel-mute'
import { useState } from 'react'

const Player = () => {
  const [loud, setLoud] = useState(30)
  const [progress, setProgress] = useState(30)
  return (
    <PlayerContainer>
      <PlayerFader />
      <PlayerProgress progress={progress} setProgress={setProgress} />
      <PlayerPanel
        buttons={
          <>
            <Icons.Prev />
            <Icons.Play />
            <Icons.Next />
            <Icons.Repeat />
            <Icons.Shuffle />
          </>
        }
        likeButtons={
          <>
            <Icons.Heart />
            <Icons.BrokenHeart />
          </>
        }
        name="test track name"
        author="test author name"
        muteControl={
          <>
            <Icons.Mute />
            <PlayerPanelMute loud={loud} setLoud={setLoud} />
          </>
        }
      />
    </PlayerContainer>
  )
}

export default Player
