import styled from 'styled-components'

export const FilterContainer = styled.div`
  ${(props) => props.theme.applyColors('filter-container')}
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: fit-content;
  column-gap: ${(props) => props.theme.width(15)};
`

export const FilterButtonsContainer = styled.div`
  ${(props) => props.theme.applyColors('filter-buttons-container')}
  display: flex;
  flex-flow: row nowrap;
  height: fit-content;
  width: fit-content;
  column-gap: ${(props) => props.theme.width(10)};
`
