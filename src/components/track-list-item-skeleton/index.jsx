import { TrackListItemSkeletonStyled } from './style'
import Skeleton from '../skeleton'
import { TrackListItemIconStyled } from '../track-list-item-icon/style'

const TrackListItemSkeleton = () => {
  return (
    <TrackListItemSkeletonStyled>
      <TrackListItemIconStyled>
        <Skeleton animationOffset={294} />
      </TrackListItemIconStyled>
      <Skeleton animationOffset={362} width={396} height={18} />

      <Skeleton animationOffset={775} width={304} height={18} />
      <Skeleton animationOffset={1096} width={229} height={18} />
    </TrackListItemSkeletonStyled>
  )
}

export default TrackListItemSkeleton
