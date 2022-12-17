import styled from 'styled-components'

export const MainNavigationStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: ${(props) => props.theme.height(26)};
  align-content: flex-start;
  align-items: flex-start;
`
