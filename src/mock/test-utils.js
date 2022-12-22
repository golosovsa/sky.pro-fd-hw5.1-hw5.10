import { useState } from 'react'
import { THEME_DEFAULT, THEME_DARK, THEME_LIGHT } from '../app/theme/constants'
import theme from '../app/theme'
import { ThemeContext } from 'styled-components'
import { render, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

const AllProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(THEME_DEFAULT)

  const toggleTheme = () => {
    if (currentTheme === THEME_DARK) {
      setCurrentTheme(THEME_LIGHT)
      return
    }

    setCurrentTheme(THEME_DARK)
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options })

export function withStoreProvider(store) {
  return function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
}

export const setupApiStore = (api, extraReducers, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(api.middleware)
    })

  const initialStore = getStore()
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore)
  }

  let cleanupListeners

  beforeEach(() => {
    const store = getStore()
    refObj.store = store
    refObj.wrapper = withStoreProvider(store)

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch)
    }
  })

  afterEach(() => {
    cleanup()

    if (!withoutListeners) {
      cleanupListeners()
    }

    refObj.store.dispatch(api.util.resetApiState())
  })

  return refObj
}

const localStorageMocked = (() => {
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
