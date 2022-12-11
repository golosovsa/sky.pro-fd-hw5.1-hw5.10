import { useDispatch } from 'react-redux'
import { logOut } from '../../app/store/slices/auth'

export const LogOut = ({ children }) => {
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logOut())
  return <div onClick={handleLogOut}>{children}</div>
}
