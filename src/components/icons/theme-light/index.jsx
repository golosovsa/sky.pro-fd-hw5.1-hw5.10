import styled from 'styled-components'
import { ReactComponent as SVGThemeLight } from './theme-light.svg'

export const ThemeLightIcon = styled(SVGThemeLight)`
  ${(props) => props.theme.applyColors('theme-icon')}
  ${(props) => props.theme.applySize(39, 39)}
`
