import { useDispatch } from 'react-redux'

export const LogOuter = ({ reducer }) => {
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(reducer())
  return <button onClick={handleLogOut}>Log Out</button>
}
