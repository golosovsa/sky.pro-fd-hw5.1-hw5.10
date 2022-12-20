import styled from 'styled-components'

const NotFoundTitle = styled.h1`
  ${(props) => props.theme.applyColors('not-found-title')}
  ${(props) => props.theme.applyFont(160, 168, 400)}
  font-feature-settings: 'pnum' on, 'lnum' on;
`

export default NotFoundTitle
