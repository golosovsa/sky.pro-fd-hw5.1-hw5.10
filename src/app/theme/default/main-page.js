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

  'filter-button': {
    'background-color': PALETTE.transparent,
    'border-color': PALETTE.white,
    color: PALETTE.white,

    ':hover': {
      'border-color': PALETTE.mauve,
      color: PALETTE.mauve
    },

    ':active': {
      'border-color': PALETTE.mauve,
      color: PALETTE.mauve
    }
  }
}
