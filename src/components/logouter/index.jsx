import { useDispatch, useSelector } from 'react-redux'
import { isLoggedInSelector } from '../../app/store/selectors/auth'
import { logOut } from '../../app/store/slices/auth'

export const LogOuter = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(isLoggedInSelector)

  const handleLogOut = () => dispatch(logOut)

  if (!isLoggedIn) return

  return <button onClick={handleLogOut}>Log Out</button>
}
