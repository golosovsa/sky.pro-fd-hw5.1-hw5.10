import styled from 'styled-components'

const NotFoundText = styled.p`
  ${(props) => props.theme.applyColors('not-found-text')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
  font-feature-settings: 'pnum' on, 'lnum' on;
  text-align: center;
`

export default NotFoundText
