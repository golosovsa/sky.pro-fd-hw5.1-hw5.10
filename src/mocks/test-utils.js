// import { useState } from 'react'
// import { THEME_DEFAULT, THEME_DARK, THEME_LIGHT } from '../app/theme/constants'
import theme from '../app/theme'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import themeReducer from '../app/store/slices/theme'
import authReducer from '../app/store/slices/auth'
import { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'

// const AllProviders = ({ children }) => {
//   const [currentTheme, setCurrentTheme] = useState(THEME_DEFAULT)

//   const toggleTheme = () => {
//     if (currentTheme === THEME_DARK) {
//       setCurrentTheme(THEME_LIGHT)
//       return
//     }

//     setCurrentTheme(THEME_DARK)
//   }

//   return (
//     <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options })

export function withProviders(store) {
  return function Wrapper({ children }) {
    const [currentTheme, setCurrentTheme] = useState(theme)
    const toggleTheme = () => {
      setCurrentTheme(theme)
    }
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme: toggleTheme }}>
          <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
      </Provider>
    )
  }
}

export const setupApiStore = (api, extraReducers, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: {
        theme: themeReducer,
        auth: authReducer,
        [api.reducerPath]: api.reducer,
        ...extraReducers
      },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(api.middleware)
    })

  const initialStore = getStore()
  const refObj = {
    api,
    store: initialStore,
    wrapper: withProviders(initialStore)
  }

  let cleanupListeners

  beforeEach(() => {
    const store = getStore()
    refObj.store = store
    refObj.wrapper = withProviders(store)

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
