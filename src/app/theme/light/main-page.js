import { PALETTE } from '../palette'

export const mainPage = {
  'main-layout': {
    'background-color': PALETTE.white
  },

  'main-logo': {
    color: PALETTE.black
  },

  'burger-icon': {
    color: PALETTE.black
  },

  'theme-icon': {
    color: PALETTE.black
  },

  'main-burger-menu': {
    'background-color': PALETTE.pampas
  },

  'main-navigation-link': {
    color: PALETTE.black,

    ':hover': {
      color: PALETTE.black
    },

    ':focus': {
      color: PALETTE.black
    },

    ':active': {
      color: PALETTE.black
    },

    ':visited': {
      color: PALETTE.black
    }
  },

  'search-container': {
    'border-bottom-color': PALETTE.lightSilver
  },

  'search-icon': {
    color: PALETTE.black
  },

  'search-input': {
    'background-color': PALETTE.transparent,
    color: PALETTE.black,

    '::placeholder': {
      color: PALETTE.gainsboro
    }
  },

  title: {
    color: PALETTE.black
  },

  label: {
    color: PALETTE.black
  },

  'filter-button': {
    'border-color': PALETTE.black,
    color: PALETTE.black
  }
}
