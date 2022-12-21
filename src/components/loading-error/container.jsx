import styled from 'styled-components'

export const LoadingErrorContainer = styled.div`
  ${(props) => props.theme.applyColors('loading-error-container')}
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const LoadingErrorTextContainer = styled.div`
  width: ${(props) => props.theme.width(268)};
`

export const LoadingErrorButtonContainer = styled.div`
  width: ${(props) => props.theme.width(178)};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
`
