import styled from 'styled-components'

const Label = styled.p`
  ${(props) => props.theme.applyColors('label')}
  ${(props) => props.theme.applyFont(16, 18, 400)}

  letter-spacing: 0.001em;
  font-feature-settings: 'pnum' on, 'lnum' on;
`

export default Label
