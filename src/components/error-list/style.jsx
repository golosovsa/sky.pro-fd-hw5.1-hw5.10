import styled from 'styled-components'

export const ErrorListStyled = styled.div`
  ${(props) => props.theme.applyColors('error-list')}
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
`
