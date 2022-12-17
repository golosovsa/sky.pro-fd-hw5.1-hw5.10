import styled from 'styled-components'

export const RadioListContainer = styled.div`
  ${(props) => props.theme.applyColors('radio-list-container')}
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: ${(props) => props.theme.width(28)};
`
