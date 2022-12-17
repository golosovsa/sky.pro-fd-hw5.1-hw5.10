import { TrackListContainer, TrackListEmptySpaceContainer } from './container'
import { TrackListStyled } from './style'

const TrackList = ({ children, header }) => {
  return (
    <TrackListContainer>
      {header}
      <TrackListStyled>
        {children}
        <TrackListEmptySpaceContainer />
      </TrackListStyled>
    </TrackListContainer>
  )
}

export default TrackList
