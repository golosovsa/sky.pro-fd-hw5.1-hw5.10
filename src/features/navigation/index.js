import { Link } from 'react-router-dom'
import Icons from '../../components/icons'
import MainNavigation from '../../components/main-navigation'
import MainNavigationLink from '../../components/main-navigation-link'
import { LogOut } from '../logout'
import { ThemeSwitcher } from '../theme-switcher'

const NavigationFeature = () => {
  const permanent = (
    <Link to="/">
      <Icons.MainLogo />
    </Link>
  )

  const icon = <Icons.Burger />

  return (
    <MainNavigation permanent={permanent} icon={icon}>
      <MainNavigationLink to="/">Главное</MainNavigationLink>
      <MainNavigationLink to="/">Мои треки</MainNavigationLink>
      <LogOut>
        <MainNavigationLink>Выйти</MainNavigationLink>
      </LogOut>
      <ThemeSwitcher />
    </MainNavigation>
  )
}

export default NavigationFeature
