import { useSelector } from 'react-redux'
import { isLoggedInSelector } from './app/store/selectors/auth'
import { AppRoutes } from './routes'

function App() {
  const isLoggedIn = useSelector(isLoggedInSelector)

  return (
    <>
      {`logged in - ${isLoggedIn}`} <br />
      <AppRoutes isAuth={isLoggedIn} />
    </>
  )
}

export default App
