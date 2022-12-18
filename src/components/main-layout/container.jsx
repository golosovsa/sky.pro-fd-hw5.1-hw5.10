import styled from 'styled-components'

export const NavigationContainer = styled.section`
  padding-top: ${(props) => props.theme.height(36)};
  padding-left: ${(props) => props.theme.width(36)};
  z-index: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
`

export const ContentContainer = styled.main`
  padding-top: ${(props) => props.theme.height(19)};
  padding-left: ${(props) => props.theme.width(50)};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  row-gap: ${(props) => props.theme.height(51)};
`

export const ASideContainer = styled.aside`
  padding-top: ${(props) => props.theme.height(328)};
  padding-left: ${(props) => props.theme.width(7)};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  row-gap: ${(props) => props.theme.width(30)};
`
