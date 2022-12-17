import { TrackListItemExtraNameStyled, TrackListItemNameStyled } from './style'

const TrackListItemName = ({ name, extraName }) => {
  return (
    <TrackListItemNameStyled>
      {name}
      {extraName && <TrackListItemExtraNameStyled>({extraName})</TrackListItemExtraNameStyled>}
    </TrackListItemNameStyled>
  )
}

export default TrackListItemName
