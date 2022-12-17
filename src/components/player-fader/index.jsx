import styled from 'styled-components'

const PlayerFader = styled.div`
  ${(props) => props.theme.applyColors('player-fader')}
  width: 100%;
  height: ${(props) => props.theme.width(44)};
`

export default PlayerFader
