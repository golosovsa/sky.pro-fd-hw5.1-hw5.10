import Icons from '../icons'
import TrackListHeaderLabel from '../track-list-header-label'
import { TrackListHeaderContainer } from './container'

const TrackListHeader = () => {
  return (
    <TrackListHeaderContainer>
      <TrackListHeaderLabel>трек</TrackListHeaderLabel>
      <TrackListHeaderLabel>исполнитель</TrackListHeaderLabel>
      <TrackListHeaderLabel>альбом</TrackListHeaderLabel>
      <Icons.Clock />
    </TrackListHeaderContainer>
  )
}

export default TrackListHeader
