import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  height: ${(props) => props.theme.width(52)};
  display: grid;
  grid-template-columns: ${(props) => props.theme.width(35)} auto;
  align-items: center;
  justify-items: center;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: ${(props) => props.theme.height(1)};

  ${(props) => props.theme.applyColors('search-container')}
`
