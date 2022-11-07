import PlayerProgress from './PlayerProgress'
import Player from './Player'
import Volume from './Volume'

function Bar(props) {
  return (
    <div className="bar">
      <div className="bar__content">
        <PlayerProgress />
        <div className="bar__player-block">
          <Player
            author={props.author}
            album={props.album}
            action={props.action}
          />
          <Volume/>
        </div>
      </div>
    </div>
  )
}

export default Bar
