import styled from 'styled-components'

export const RadioMarker = styled.div`
  ${(props) => props.theme.applyColors('radio-marker')}
  ${(props) => props.theme.applySize(11, 11)}
  border-radius: 50%;
`

export const RadioItemStyled = styled.div`
  ${(props) => props.theme.applyColors('radio-item')}
  ${(props) => props.theme.applyFont(20, 24, 400)}
  white-space: nowrap;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: ${(props) => props.theme.width(10)};
`
