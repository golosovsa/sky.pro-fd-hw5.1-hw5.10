import styled from 'styled-components'
import { ReactComponent as SVGLoginLogo } from './login-logo.svg'

export const LoginLogo = styled(SVGLoginLogo)`
  ${(props) => props.theme.applyColors('login-logo')}
  ${(props) => props.theme.applySize(140, 21)}
`
