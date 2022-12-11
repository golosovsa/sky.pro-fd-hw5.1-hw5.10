import styled from 'styled-components'

export const MainNavigationStyled = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  row-gap: ${(props) => props.theme.height(36)};
  align-content: flex-start;
  align-items: flex-start;
`
