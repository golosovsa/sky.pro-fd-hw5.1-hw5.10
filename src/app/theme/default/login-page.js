import { PALETTE } from '../palette'

export const loginPage = {
  'login-form-container': {
    'background-color': PALETTE.gray15
  },

  'login-form': {
    'background-color': PALETTE.white
  },

  'login-logo': {
    color: PALETTE.black
  },

  'login-input-text': {
    'background-color': PALETTE.transparent,
    color: PALETTE.black,
    'border-bottom-color': PALETTE.grayishRed,

    '::placeholder': {
      color: PALETTE.gainsboro
    }
  }
}
