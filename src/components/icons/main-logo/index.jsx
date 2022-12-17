import styled from 'styled-components'
import { ReactComponent as SVGMainLogo } from './main-logo.svg'

export const MainLogo = styled(SVGMainLogo)`
  ${(props) => props.theme.applyColors('main-logo')}
  ${(props) => props.theme.applySize(114, 17)}
`
