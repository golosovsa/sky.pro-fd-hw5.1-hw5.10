import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../app/store/slices/theme'

export const ThemeSwitcher = () => {
  const dispatch = useDispatch()

  const handleSwitchTheme = () => {
    dispatch(toggleTheme())
  }

  return <button onClick={handleSwitchTheme}>Switch theme</button>
}
