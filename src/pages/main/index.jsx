import MainLayout from '../../components/main-layout'
import NavigationFeature from '../../features/navigation'

export const Main = () => {
  const navigation = <NavigationFeature />
  const content = <h1>Content</h1>
  const aside = <h1>ASide</h1>

  return <MainLayout navigation={navigation} content={content} aside={aside} />
}
