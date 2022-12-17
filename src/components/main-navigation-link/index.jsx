import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const MainNavigationLink = styled(NavLink)`
  ${(props) => props.theme.applyColors('main-navigation-link')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active,
  &:visited {
    text-decoration: none;
  }
`

export default MainNavigationLink
