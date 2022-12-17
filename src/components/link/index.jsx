import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkStyled = styled(Link)`
  ${(props) => props.theme.applyColors('aside-link')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  text-decoration: none;
  width: min-content;
  height: min-content;

  &:hover,
  &:focus,
  &:active,
  &:visited {
    text-decoration: none;
  }
`

export default LinkStyled
