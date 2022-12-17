import ShortListItem from '../shortlist-item'
import { ShortListStyled } from './style'

const ShortList = ({ items, onItemClick = undefined }) => {
  const handleOnItemClick = (value) => {
    if (onItemClick) onItemClick(value)
  }

  return (
    <ShortListStyled>
      {items.map((item) => (
        <ShortListItem
          key={item.value}
          selected={item.selected}
          onClick={() => handleOnItemClick(item.value)}>
          {item.value}
        </ShortListItem>
      ))}
    </ShortListStyled>
  )
}

export default ShortList
