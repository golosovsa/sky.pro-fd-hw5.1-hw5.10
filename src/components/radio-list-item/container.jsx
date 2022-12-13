import styled from 'styled-components'

export const RadioMarkerContainer = styled.div`
  ${(props) => props.theme.applyColors('radio-marker-container')}
  ${(props) => props.theme.applySize(18, 18)}
  border-radius: 50%;

  border-style: solid;
  border-width: min(${(props) => props.theme.width(1)}, ${(props) => props.theme.height(1)});
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
`
