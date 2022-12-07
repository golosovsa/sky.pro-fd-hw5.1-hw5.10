import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import { store } from './app/store'
import GlobalStyles from './components/styled/globals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
