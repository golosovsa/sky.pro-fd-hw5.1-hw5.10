/* eslint-disable jsx-a11y/anchor-is-valid */
function PlaylistItem(props) {
  const onTitleClick = () => {
    props.action('title', props.id)
  }

  const onAuthorClick = () => {
    props.action('author', props.id)
  }

  const onAlbumClick = () => {
    props.action('album', props.id)
  }

  const onLikeClick = () => {
    props.action('like', props.id)
  }

  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use href="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a
              className="track__title-link"
              href="#"
              onClick={onTitleClick}
            >
              {props.title}
              <span className="track__title-span">{props.titleSpan}</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a
            className="track__author-link"
            href="#"
            onClick={onAuthorClick}
          >
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a
            className="track__album-link"
            href="#"
            onClick={onAlbumClick}
          >
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time" onClick={onLikeClick}>
            <use href="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
