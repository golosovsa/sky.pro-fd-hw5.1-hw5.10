import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getRefresh, isRefreshExists } from './app/auth/refresh'
import { useRefreshMutation } from './app/services/user'
import { isLoggedInSelector } from './app/store/selectors/auth'
import { AppRoutes } from './routes'

function App() {
  const isLoggedIn = useSelector(isLoggedInSelector)

  const [refresh] = useRefreshMutation()

  useEffect(() => {
    if (!isRefreshExists()) return
    refresh({ refresh: getRefresh() })
  }, [])

  useEffect(() => console.log('isLoggedIn', isLoggedIn), [isLoggedIn])

  return <AppRoutes isAuth={isLoggedIn} />
}

export default App
