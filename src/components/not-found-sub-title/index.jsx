import styled from 'styled-components'

const NotFoundSubTitle = styled.h2`
  ${(props) => props.theme.applyColors('not-found-sub-title')}
  ${(props) => props.theme.applyFont(32, 40, 400)}
  font-feature-settings: 'pnum' on, 'lnum' on;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  column-gap: ${(props) => props.theme.width(8)};
`

export default NotFoundSubTitle
