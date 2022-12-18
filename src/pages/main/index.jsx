import { useEffect, useState } from 'react'
import { useGetTracksQuery } from '../../app/services/tracks'
import MainLayout from '../../components/main-layout'
import SearchInput from '../../components/search'
import LinksFeature from '../../features/links'
import NavigationFeature from '../../features/navigation'
import FilterFeature, { SORT_DESCENT } from '../../features/filter'
import TrackListFeature from '../../features/track-list'
import PlayerFeature from '../../features/player'

export const Main = () => {
  const {
    data: tracks,
    isLoading: isTracksLoading,
    isSuccess: isTracksSuccess
  } = useGetTracksQuery()

  const [filter, updateFilter] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [search, updateSearch] = useState(null)
  const [searchedData, setSearchedData] = useState(null)

  const [track, setTrack] = useState(null)

  const handleChangeTrack = (event) => {
    const { eventName, isShuffle } = event
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
    if (!filteredData) return
    if (!search) {
      setSearchedData(filteredData)
      return
    }
    const searched = filteredData.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    setSearchedData(searched)
  }, [filteredData, search])

  useEffect(() => {
    if (!tracks) return
    if (!filter) {
      setFilteredData(tracks)
      return
    }
    const { authors, years, genres } = filter
    let filtered = [...tracks]
    if (authors.size > 0) filtered = filtered.filter((track) => authors.has(track.author))
    if (genres.size > 0) filtered = filtered.filter((track) => genres.has(track.genre))
    filtered = filtered.sort((a, b) => {
      const dateA = Date.parse(a.release_date)
      const dateB = Date.parse(b.release_date)
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
    })
    if (years && years === SORT_DESCENT) filtered = filtered.reverse()
    setFilteredData(filtered)
  }, [filter, isTracksSuccess])

  const navigation = <NavigationFeature />
  const content = (
    <>
      <SearchInput updateSearch={updateSearch} />
      <FilterFeature data={tracks} updateFilter={updateFilter} />
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
