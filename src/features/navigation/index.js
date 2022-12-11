import { Link } from 'react-router-dom'
import Icons from '../../components/icons'
import MainNavigation from '../../components/main-navigation'

const NavigationFeature = () => {
  const permanent = (
    <Link to="/">
      <Icons.MainLogo />
    </Link>
  )

  const icon = <p>icon</p>

  return (
    <MainNavigation permanent={permanent} icon={icon}>
      <p>link 1</p>
      <p>link 2</p>
      <p>link 3</p>
      <p>link 4</p>
    </MainNavigation>
  )
}

export default NavigationFeature
