import RadioItem from '../radio-list-item'
import { RadioListContainer } from './container'

const RadioList = ({ items, onItemClick }) => {
  const handleOnItemClick = (value) => {
    if (onItemClick) onItemClick(value)
  }

  return (
    <RadioListContainer>
      {items &&
        items.map((item) => (
          <RadioItem
            onClick={() => handleOnItemClick(item.value)}
            key={item.value}
            checked={item.checked}>
            {item.value}
          </RadioItem>
        ))}
    </RadioListContainer>
  )
}

export default RadioList
