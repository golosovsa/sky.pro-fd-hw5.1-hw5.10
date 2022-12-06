import { useSelector } from 'react-redux'
import { isLoggedInSelector } from './app/store/selectors/auth'
import { themeSelector } from './app/store/selectors/theme'
import { LogOuter } from './components/logouter'
import { ThemeSwitcher } from './components/theme-switcher'

function App() {
  const theme = useSelector(themeSelector)
  const isLoggedIn = useSelector(isLoggedInSelector)

  return (
    <>
      {`logged in - ${isLoggedIn}`} <br />
      {theme} <br />
      <ThemeSwitcher />
      <LogOuter />
    </>
  )
}

export default App
