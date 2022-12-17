import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isSwitchThemeSelector, themeSelector } from '../../app/store/selectors/theme'
import { toggleTheme, setIsSwitchTheme } from '../../app/store/slices/theme'
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_DEFAULT,
  THEME_TRANSITION_TIME
} from '../../app/theme/constants'
import Icons from '../../components/icons'

export const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const theme = useSelector(themeSelector)

  const isSwitchTheme = useSelector(isSwitchThemeSelector)

  useEffect(() => {
    if (!isSwitchTheme) return

    dispatch(toggleTheme())
    const timer = setTimeout(() => {
      dispatch(setIsSwitchTheme(false))
    }, THEME_TRANSITION_TIME * 1000)

    return () => clearTimeout(timer)
  }, [isSwitchTheme])

  let Icon

  switch (theme) {
    case THEME_DARK:
      Icon = Icons.ThemeDark
      break
    case THEME_LIGHT:
      Icon = Icons.ThemeLight
      break
    default:
      Icon = THEME_DEFAULT === THEME_DARK ? Icons.ThemeDark : Icons.ThemeLight
  }

  const handleSwitchTheme = () => {
    if (isSwitchTheme) return
    dispatch(setIsSwitchTheme(true))
  }

  return <Icon onClick={handleSwitchTheme}>Switch theme</Icon>
}
