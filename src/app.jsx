import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getRefresh, isRefreshExists } from './app/auth/refresh'
import { useRefreshMutation } from './app/services/user'
import { isLoggedInSelector } from './app/store/selectors/auth'
import { AppRoutes } from './routes'

function App() {
  const isLoggedIn = useSelector(isLoggedInSelector)

  const [refresh, { isLoading: isRefreshFetching, isError: isRefreshError }] = useRefreshMutation()

  useEffect(() => {
    if (!isRefreshExists()) return
    refresh({ refresh: getRefresh() })
  }, [])

  if ((!isLoggedIn || isRefreshFetching) && !isRefreshError && isRefreshExists()) {
    return
  }

  return <AppRoutes isAuth={isLoggedIn} />
}

export default App
