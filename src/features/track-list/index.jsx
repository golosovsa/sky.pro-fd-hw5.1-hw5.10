import TrackList from '../../components/track-list'
import TrackListHeader from '../../components/track-list-header'
import TrackListItem from '../../components/track-list-item'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery
} from '../../app/services/favorites'
import { useEffect, useState } from 'react'

const TrackListFeature = ({ data, onSelectTrack }) => {
  const { data: favorites } = useGetFavoritesQuery()
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()
  const [favoriteSet, setFavoriteSet] = useState(new Set())

  useEffect(() => {
    if (!favorites) return
    setFavoriteSet(new Set(favorites.map((item) => item.id)))
  }, [favorites])

  const handleOnItemClick = (item) => {
    if (onSelectTrack) onSelectTrack(item)
  }

  const handleOnLikeClick = (item) => {
    const { id } = item
    if (favoriteSet.has(id)) {
      deleteFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  return (
    <TrackList header={<TrackListHeader />}>
      {data &&
        data.map((item) => (
          <TrackListItem
            key={item.id}
            item={item}
            onTrackItemClick={handleOnItemClick}
            onLikeClick={handleOnLikeClick}
            liked={favoriteSet.has(item.id) ? 'true' : undefined}
          />
        ))}
    </TrackList>
  )
}

export default TrackListFeature
