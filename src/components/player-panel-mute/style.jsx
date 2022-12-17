import styled from 'styled-components'

export const PlayerPanelMuteStyled = styled.div`
  ${(props) => props.theme.applyColors('player-panel-mute')}
  position: relative;
  left: 0;
  top: 0;
  width: 30%;
  height: ${(props) => props.theme.height(2)};
  &::after {
    content: ' ';
    display: block;
    ${(props) => props.theme.applySize(12, 12)}
    border-radius: 50%;
    border-style: solid;
    border-width: min(${(props) => props.theme.width(3)}, ${(props) => props.theme.height(3)});
    position: absolute;
    right: ${(props) => props.theme.width(-6)};
    top: ${(props) => props.theme.height(-8)};
  }
`
