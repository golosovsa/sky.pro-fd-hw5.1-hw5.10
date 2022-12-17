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

  'sticky-button': {
    'background-color': PALETTE.transparent,
    'border-color': PALETTE.black,
    color: PALETTE.black
  },

  popup: {
    'background-color': PALETTE.alphaGainsboro
  },

  'short-list': {
    '::-webkit-scrollbar-track': {
      background: PALETTE.pampas
    },

    '::-webkit-scrollbar-thumb': {
      'background-color': PALETTE.black
    }
  },

  'short-list-item': {
    color: PALETTE.black
  },

  'radio-marker-container': {
    'border-color': PALETTE.black
  },

  'radio-marker': {
    'background-color': PALETTE.black
  },

  'radio-item': {
    color: PALETTE.black
  },

  'track-icon': {
    color: PALETTE.darkGray
  },

  'track-list-item-icon': {
    'background-color': PALETTE.whiteSmoke
  }
}
