import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getRefresh, isRefreshExists } from './app/auth/refresh'
import { useRefreshMutation } from './app/services/user'
import { isLoggedInSelector } from './app/store/selectors/auth'
import { isSwitchThemeSelector, themeSelector } from './app/store/selectors/theme'
import GlobalStyles from './app/theme/global-styles'
import Skeleton from './components/skeleton'
import { AppRoutes } from './routes'

function App() {
  const isLoggedIn = useSelector(isLoggedInSelector)
  const theme = useSelector(themeSelector)
  const isSwitchTheme = useSelector(isSwitchThemeSelector)

  const [refresh, { isLoading: isRefreshFetching, isError: isRefreshError }] = useRefreshMutation()

  useEffect(() => {
    if (isRefreshExists()) {
      refresh({ refresh: getRefresh() })
    }
  }, [])

  const content =
    (!isLoggedIn || isRefreshFetching) && !isRefreshError && isRefreshExists() ? (
      <Skeleton full={true} />
    ) : (
      <AppRoutes isAuth={isLoggedIn} />
    )

  return (
    <>
      <GlobalStyles theme={theme} isSwitchTheme={isSwitchTheme} />
      {content}
    </>
  )
}

export default App
