import styled, { css } from 'styled-components'

export const FILTER_POPUP_CONTAINER_FALLING_INTERVAL = 0.3

export const FilterDropDownContainer = styled.div`
  ${(props) => props.theme.applyColors('filter-dropdown-container')}
  position: relative;
  left: 0;
  top: 0;
  width: fit-content;
  height: fit-content;
  ${(props) =>
    props.mouseEventsDisabled &&
    css`
      pointer-events: none;
    `}
`

export const FilterPopupContainer = styled.div`
  position: absolute;
  left: 0;
  top: ${(props) => props.theme.height(50)};
  width: fit-content;
  height: fit-content;
  transition: opacity ${FILTER_POPUP_CONTAINER_FALLING_INTERVAL}s linear;
  display: none;
  opacity: 0;
`

export const FilterTabContainer = styled.div`
  ${(props) => props.theme.applyColors('filter-tab-container')}
  position: absolute;
  right: ${(props) => props.theme.width(16)};
  top: ${(props) => props.theme.height(-8)};
`
