import styled from 'styled-components'

export const PlayerProgressStyled = styled.div`
  ${(props) => props.theme.applyColors('player-progress')}
  height: ${(props) => props.theme.height(5)};
  position: relative;
  left: 0;
  top: 0;
  width: 30%;
`
