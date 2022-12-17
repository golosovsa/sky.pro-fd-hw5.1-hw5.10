import styled from 'styled-components'

export const MainLayoutStyled = styled.div`
  ${(props) => props.theme.applyColors('main-layout')}
  ${(props) => props.theme.applySize(1920)}
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => props.theme.width(244)} auto ${(props) =>
      props.theme.width(333)};
  align-items: stretch;
  justify-items: stretch;
  overflow: auto;
`
