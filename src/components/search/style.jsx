import styled from 'styled-components'

export const SearchInputStyled = styled.input.attrs({ type: 'text' })`
  ${(props) => props.theme.applyColors('search-input')}
  ${(props) => props.theme.applyFont(16, 18, 400)}
  padding-left: ${(props) => props.theme.width(6)};
  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  justify-self: stretch;
  background-image: none;
  box-shadow: none;
  outline: none;
  border: none;
`
