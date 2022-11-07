/* eslint-disable jsx-a11y/anchor-is-valid */
function TrackPlay(props) {
  const onAuthorClick = () => props.action('TrackPlay', props.author)
  const onAlbumClick = () => props.action('TrackPlay', props.album)
  const onLikeClick = () => props.action('TrackPlay', 'like')
  const onDislikeClick = () => props.action('TrackPlay', 'dislike')
  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          <svg className="track-play__svg" alt="music">
            <use href="img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className="track-play__author">
          <a className="track-play__author-link" href="#" onClick={onAuthorClick}>
            {props.author}
          </a>
        </div>
        <div className="track-play__album">
          <a className="track-play__album-link" href="#" onClick={onAlbumClick}>
            {props.album}
          </a>
        </div>
      </div>

      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like" onClick={onLikeClick}>
            <use href="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike" onClick={onDislikeClick}>
            <use href="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TrackPlay
