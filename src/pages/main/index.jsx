import { useEffect } from 'react'
import { useGetTracksQuery } from '../../app/services/tracks'
import FilterButton from '../../components/filter-button'
import MainLayout from '../../components/main-layout'
import SearchInput from '../../components/search'
import Title from '../../components/title'
import LinksFeature from '../../features/links'
import NavigationFeature from '../../features/navigation'

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
      <FilterButton>sample</FilterButton>
      <Title>прОвЕрОчНыЙ ТаЙтЛ</Title>
    </>
  )
  const aside = <LinksFeature />

  return <MainLayout navigation={navigation} content={content} aside={aside} />
}
