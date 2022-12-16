import { TrackListItemStyled } from './style'
import TrackListItemIcon from '../track-list-item-icon'
import TrackListItemName from '../track-list-item-name'
import TrackListItemAuthor from '../track-list-item-author'
import TrackListItemAlbum from '../track-list-item-album'
import Icons from '../icons'
import TrackListItemTime from '../track-list-item-time'

const TrackListItem = ({ item, selected, liked, onLikeClick, onTrackItemClick }) => {
  const toMMSS = (seconds) => {
    const min = Math.trunc(Number(seconds) / 60)
    const sec = Number(seconds) - min * 60
    return `${min}:${sec < 10 ? `0${sec}` : sec}`
  }

  return (
    <TrackListItemStyled selected={selected} onClick={() => onTrackItemClick(item)}>
      <TrackListItemIcon />
      <TrackListItemName name={item.name} extraName={item.extraName} />
      <TrackListItemAuthor>{item.author}</TrackListItemAuthor>
      <TrackListItemAlbum>{item.album}</TrackListItemAlbum>
      <Icons.Heart
        active={liked}
        onClick={(event) => {
          onLikeClick(item)
          event.stopPropagation()
        }}
      />
      <TrackListItemTime>{toMMSS(item.duration_in_seconds)}</TrackListItemTime>
    </TrackListItemStyled>
  )
}

export default TrackListItem
