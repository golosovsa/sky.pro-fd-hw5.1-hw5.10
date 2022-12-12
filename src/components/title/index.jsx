import styled from 'styled-components'

const Title = styled.h1`
  ${(props) => props.theme.applyColors('title')}
  ${(props) => props.theme.applyFont(60, 64, 400)}

  letter-spacing: -0.013em;
  font-feature-settings: 'pnum' on, 'lnum' on;

  white-space: nowrap;
  text-overflow: ellipsis;
`

export default Title
