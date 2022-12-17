import { TrackListItemSkeletonStyled } from './style'
import TrackListItemAuthor from '../track-list-item-author'
import TrackListItemAlbum from '../track-list-item-album'
import Skeleton from '../skeleton'
import { TackListItemIconStyled } from '../track-list-item-icon/style'
import { TrackListItemNameStyled } from '../track-list-item-name/style'

const TrackListItemSkeleton = () => {
  return (
    <TrackListItemSkeletonStyled>
      <TackListItemIconStyled>
        <Skeleton />
      </TackListItemIconStyled>
      <TrackListItemNameStyled>
        <Skeleton />
      </TrackListItemNameStyled>

      <TrackListItemAuthor>
        <Skeleton />
      </TrackListItemAuthor>
      <TrackListItemAlbum>
        <Skeleton />
      </TrackListItemAlbum>
    </TrackListItemSkeletonStyled>
  )
}

export default TrackListItemSkeleton
