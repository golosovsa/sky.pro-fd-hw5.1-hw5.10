import styled from 'styled-components'

export const NavigationContainer = styled.section`
  padding-top: ${(props) => props.theme.height(36)};
  padding-left: ${(props) => props.theme.width(36)};
`

export const ContentContainer = styled.main`
  padding-top: ${(props) => props.theme.height(33)};
  padding-left: ${(props) => props.theme.width(50)};
`

export const ASideContainer = styled.aside`
  padding-top: ${(props) => props.theme.height(428)};
  padding-left: ${(props) => props.theme.width(7)};
`
