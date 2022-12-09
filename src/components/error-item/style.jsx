import styled from 'styled-components'

export const ErrorItemStyled = styled.div`
  ${(props) => props.theme.applyColors('error-item')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
  display: ${(props) => (props.isHidden ? 'none' : 'grid')};
  grid-template-columns: ${(props) => props.theme.width(110)} auto;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.height(42)};
  border-style: solid;
  border-width: min(${(props) => props.theme.width(1)}, ${(props) => props.theme.height(1)});
  &:nth-child(n + 1) {
    border-top: none;
  }
  padding-left: ${(props) => props.theme.height(21)};
  padding-right: ${(props) => props.theme.height(12)};
`
