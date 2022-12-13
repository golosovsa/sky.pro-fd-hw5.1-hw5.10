import styled from 'styled-components'

export const StickyButtonStyled = styled.div`
  ${(props) =>
    props.active
      ? props.theme.applyColors('sticky-button-active')
      : props.theme.applyColors('sticky-button')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  height: ${(props) => props.theme.height(40)};
  border-style: solid;
  border-width: min(${(props) => props.theme.width(1)}, ${(props) => props.theme.height(1)});
  border-radius: ${(props) => props.theme.height(20)};
  padding-left: ${(props) => props.theme.width(20)};
  padding-right: ${(props) => props.theme.width(20)};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  transition: color 0.25s linear, border-color 0.25s linear;
`
