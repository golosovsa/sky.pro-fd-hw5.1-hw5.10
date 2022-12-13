import { useEffect } from 'react'
import { useGetTracksQuery } from '../../app/services/tracks'
import MainLayout from '../../components/main-layout'
import SearchInput from '../../components/search'
import LinksFeature from '../../features/links'
import NavigationFeature from '../../features/navigation'
import FilterFeature from '../../features/filter'

export const Main = () => {
  const { data: tracks, isLoading: isTracksLoading } = useGetTracksQuery()

  useEffect(() => {
    console.log(tracks)
  }, [tracks])

  useEffect(() => {
    console.log('isTracksLoading', isTracksLoading)
  }, [isTracksLoading])

  const navigation = <NavigationFeature />
  const content = (
    <>
      <SearchInput />
      <FilterFeature data={tracks} />
    </>
  )
  const aside = <LinksFeature />

  return <MainLayout navigation={navigation} content={content} aside={aside} />
}
