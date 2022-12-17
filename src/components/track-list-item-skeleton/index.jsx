import { TrackListItemSkeletonStyled } from './style'
import TrackListItemAuthor from '../track-list-item-author'
import TrackListItemAlbum from '../track-list-item-album'
import Skeleton from '../skeleton'
import { TrackListItemIconStyled } from '../track-list-item-icon/style'
import { TrackListItemNameStyled } from '../track-list-item-name/style'

const TrackListItemSkeleton = () => {
  return (
    <TrackListItemSkeletonStyled>
      <TrackListItemIconStyled>
        <Skeleton animationOffset={294} />
      </TrackListItemIconStyled>
      <TrackListItemNameStyled>
        <Skeleton animationOffset={362} height={18} />
      </TrackListItemNameStyled>

      <TrackListItemAuthor>
        <Skeleton animationOffset={775} height={18} />
      </TrackListItemAuthor>
      <TrackListItemAlbum>
        <Skeleton animationOffset={1096} height={18} />
      </TrackListItemAlbum>
    </TrackListItemSkeletonStyled>
  )
}

export default TrackListItemSkeleton
