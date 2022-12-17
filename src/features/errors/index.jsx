import { useSelector, useDispatch } from 'react-redux'
import ErrorItem from '../../components/error-item'
import ErrorList from '../../components/error-list'

const ErrorsFeature = ({ reducer, selector }) => {
  const dispatch = useDispatch()
  const errors = useSelector(selector)

  const handleOnHide = (id) => {
    dispatch(reducer(id))
  }

  if (!errors.length || errors.length === 0) {
    return
  }

  return (
    <ErrorList>
      {errors.map((item) => {
        return (
          <ErrorItem
            key={`${item.id}${Date.now()}`}
            id={item.id}
            error={item.error}
            message={item.message}
            isHidden={item.isHidden}
            onHide={handleOnHide}
          />
        )
      })}
    </ErrorList>
  )
}

export default ErrorsFeature
