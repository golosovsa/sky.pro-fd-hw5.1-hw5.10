import PlayerButton from './PlayerButton'
import TrackPlay from './TrackPlay'

function Player(props) {
  return (
    <div className="bar__player player">
      <div className="player__controls">
        <PlayerButton name="prev" action={props.action} />
        <PlayerButton name="play" action={props.action} />
        <PlayerButton name="next" action={props.action} />
        <PlayerButton name="repeat" action={props.action} />
        <PlayerButton name="shuffle" action={props.action} />
      </div>
      <TrackPlay
        author={props.author}
        album={props.album}
        action={props.action}
      />
    </div>
  )
}

export default Player
