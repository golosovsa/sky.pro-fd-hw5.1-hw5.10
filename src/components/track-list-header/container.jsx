import styled from 'styled-components'

export const TrackListHeaderContainer = styled.div`
  ${(props) => props.theme.applyColors('track-list-header-container')}
  display: grid;
  grid-template-columns: ${(props) =>
    `${props.theme.width(481)} ${props.theme.width(321)}
    ${props.theme.width(293)} ${props.theme.width(15)}`};
  margin-top: ${(props) => props.theme.height(10)};
  margin-bottom: ${(props) => props.theme.height(10)};
  align-items: center;
  justify-items: start;
`
