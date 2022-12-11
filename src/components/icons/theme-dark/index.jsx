import styled from 'styled-components'
import { ReactComponent as SVGThemeDark } from './theme-dark.svg'

export const ThemeDarkIcon = styled(SVGThemeDark)`
  ${(props) => props.theme.applyColors('theme-icon')}
  ${(props) => props.theme.applySize(39, 39)}
`
