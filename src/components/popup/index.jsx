import styled from 'styled-components'

const Popup = styled.div`
  ${(props) => props.theme.applyColors('popup')}
  max-width: max-content;
  max-height: max-content;
  padding: ${(props) => props.theme.height(34)} ${(props) => props.theme.width(34)};
  border-radius: min(${(props) => props.theme.height(12)}, ${(props) => props.theme.width(12)});
`

export default Popup
