import { useEffect, useState } from 'react'
import { useGetFavoritesQuery } from '../../app/services/favorites'
import MainLayout from '../../components/main-layout'
import SearchInput from '../../components/search'
import Title from '../../components/title'
import LinksFeature from '../../features/links'
import NavigationFeature from '../../features/navigation'
import PlayerFeature from '../../features/player'
import TrackListFeature from '../../features/track-list'

const Favorites = () => {
  const {
    data: tracks,
    isLoading: isTracksLoading,
    isSuccess: isTracksSuccess
  } = useGetFavoritesQuery()

  const [search, updateSearch] = useState(null)
  const [searchedData, setSearchedData] = useState(null)
  const [track, setTrack] = useState(null)

  const handleChangeTrack = (event) => {
    const { eventName, isShuffle } = event
    if (searchedData.length === 0) return
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * searchedData.length)
      setTrack(searchedData[randomIndex])
      return
    }
    if (eventName === 'next') {
      const nextIndex = (searchedData.indexOf(track) + 1) % searchedData.length
      setTrack(searchedData[nextIndex])
      return
    }
    if (eventName === 'prev') {
      const prevIndex = (searchedData.indexOf(track) - 1) % searchedData.length
      setTrack(searchedData[prevIndex < 0 ? searchedData.length - 1 : prevIndex])
      return
    }

    console.error('Unknown event name')
  }

  useEffect(() => {
    if (!tracks) return
    if (!search) {
      setSearchedData(tracks)
      return
    }
    const searched = tracks.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    setSearchedData(searched)
  }, [tracks, search, isTracksSuccess])

  const navigation = <NavigationFeature />
  const content = (
    <>
      <SearchInput updateSearch={updateSearch} />
      <Title>Мои треки</Title>
      <TrackListFeature
        data={searchedData ? searchedData : []}
        isFetching={isTracksLoading}
        onSelectTrack={setTrack}
        selectedTrack={track}
      />
    </>
  )
  const aside = <LinksFeature isFetching={isTracksLoading} />

  return (
    <>
      <MainLayout navigation={navigation} content={content} aside={aside} />
      <PlayerFeature track={track} changeTrack={handleChangeTrack} />
    </>
  )
}

export default Favorites
