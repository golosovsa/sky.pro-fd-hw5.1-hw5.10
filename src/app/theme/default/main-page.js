import { PALETTE } from '../palette'

export const mainPage = {
  'main-layout': {
    'background-color': PALETTE.nero
  },

  'main-logo': {
    color: PALETTE.white
  },

  'burger-icon': {
    color: PALETTE.lightGray
  },

  'theme-icon': {
    color: PALETTE.white
  },

  skeleton: {
    background: PALETTE.shineSkeletonDark
  },

  'main-burger-menu': {
    'background-color': PALETTE.codGray
  },

  'main-navigation-link': {
    color: PALETTE.white,

    ':hover': {
      color: PALETTE.white
    },

    ':focus': {
      color: PALETTE.white
    },

    ':active': {
      color: PALETTE.white
    },

    ':visited': {
      color: PALETTE.white
    }
  },

  'search-container': {
    'border-bottom-color': PALETTE.darkLiver
  },

  'search-icon': {
    color: PALETTE.white
  },

  'search-input': {
    'background-color': PALETTE.transparent,
    color: PALETTE.white,

    '::placeholder': {
      color: PALETTE.gainsboro
    }
  },

  title: {
    color: PALETTE.white
  },

  label: {
    color: PALETTE.white
  },

  'sticky-button': {
    'background-color': PALETTE.transparent,
    'border-color': PALETTE.white,
    color: PALETTE.white,

    ':hover': {
      'border-color': PALETTE.mauve,
      color: PALETTE.mauve
    }
  },

  'sticky-button-active': {
    'background-color': PALETTE.transparent,
    'border-color': PALETTE.heliotrope,
    color: PALETTE.heliotrope,

    ':hover': {
      'border-color': PALETTE.mauve,
      color: PALETTE.mauve
    }
  },

  tab: {
    'background-color': PALETTE.heliotrope,
    color: PALETTE.white
  },

  popup: {
    'background-color': PALETTE.nightRider
  },

  'short-list': {
    'background-color': PALETTE.transparent,

    '::-webkit-scrollbar-track': {
      background: PALETTE.cemeteryDarkGrey
    },

    '::-webkit-scrollbar-thumb': {
      'background-color': PALETTE.white
    }
  },

  'short-list-item': {
    color: PALETTE.white
  },

  'short-list-item-selected': {
    color: PALETTE.lavenderPurple
  },

  'radio-marker-container': {
    'border-color': PALETTE.white
  },

  'radio-marker': {
    'background-color': PALETTE.white
  },

  'radio-item': {
    color: PALETTE.white
  }
}
