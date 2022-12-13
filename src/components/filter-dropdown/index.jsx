import { useEffect, useRef } from 'react'
import { useState } from 'react'
import Popup from '../popup'
import StickyButton from '../sticky-button'
import Tab from '../tab'
import {
  FilterDropDownContainer,
  FilterPopupContainer,
  FilterTabContainer,
  FILTER_POPUP_CONTAINER_FALLING_INTERVAL
} from './container'

const FilterDropdown = ({ name, children, tab }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [isShowPopup, setIsShowPopup] = useState(false)

  const popupRef = useRef(null)

  useEffect(() => {
    if (!popupRef.current) return
    if (isShowPopup && isShowing) {
      popupRef.current.style.opacity = '1'
    }
  }, [isShowing])

  useEffect(() => {
    if (!popupRef.current) return
    setIsShowing(true)
    popupRef.current.style.opacity = '0'
    if (isShowPopup) {
      popupRef.current.style.display = 'block'
    }
    const timer = setTimeout(() => {
      setIsShowing(false)
      if (!isShowPopup) {
        popupRef.current.style.display = 'none'
      }
    }, 1000 * FILTER_POPUP_CONTAINER_FALLING_INTERVAL)
    return () => clearTimeout(timer)
  }, [isShowPopup])

  return (
    <FilterDropDownContainer mouseEventsDisabled={isShowing}>
      <StickyButton setter={setIsShowPopup}>{name}</StickyButton>
      <FilterPopupContainer ref={popupRef}>
        <Popup>{children}</Popup>
      </FilterPopupContainer>
      {tab && (
        <FilterTabContainer>
          <Tab>{tab}</Tab>
        </FilterTabContainer>
      )}
    </FilterDropDownContainer>
  )
}

export default FilterDropdown
