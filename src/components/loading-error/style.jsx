import styled from 'styled-components'

export const LoadingErrorHeader = styled.h1`
  ${(props) => props.theme.applyColors('loading-error-header')}
  ${(props) => props.theme.applyFont(32, 38, 400)}
  letter-spacing: -0.008em;
  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
`

export const LoadingErrorText = styled.p`
  ${(props) => props.theme.applyColors('loading-error-text')}
  ${(props) => props.theme.applyFont(18, 24, 400)}
  letter-spacing: -0.008em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  text-align: center;
  margin-top: ${(props) => props.theme.height(12)};
  margin-bottom: ${(props) => props.theme.height(36)};
`
