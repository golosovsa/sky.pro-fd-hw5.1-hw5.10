import Icons from '../../components/icons'
import MainNavigation from '../../components/main-navigation'
import MainNavigationLink from '../../components/main-navigation-link'
import { ThemeSwitcher } from '../theme-switcher'

const NavigationFeature = () => {
  const permanent = (
    <MainNavigationLink to="/">
      <Icons.MainLogo />
    </MainNavigationLink>
  )

  return (
    <MainNavigation permanent={permanent}>
      <MainNavigationLink to="/">Главное</MainNavigationLink>
      <MainNavigationLink to="/">Мои треки</MainNavigationLink>
      <MainNavigationLink to="/logout">Выйти</MainNavigationLink>
      <ThemeSwitcher />
    </MainNavigation>
  )
}

export default NavigationFeature
