export const localStorageMocked = (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },

    setItem(key, value) {
      store[key] = value
    },

    clear() {
      store = {}
    },

    removeItem(key) {
      delete store[key]
    }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMocked })
