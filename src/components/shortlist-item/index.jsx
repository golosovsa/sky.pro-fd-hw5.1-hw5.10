import styled from 'styled-components'

const ShortListItem = styled.p`
  ${(props) =>
    props.selected
      ? props.theme.applyColors('short-list-item-selected')
      : props.theme.applyColors('short-list-item')}
  ${(props) => props.theme.applyFont(20, 24, 400)}
  font-feature-settings: 'pnum' on, 'lnum' on;

  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
`

export default ShortListItem
