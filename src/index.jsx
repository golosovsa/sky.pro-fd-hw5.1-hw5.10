import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './store'
import { ResetStyles } from './globals/reset'
import { FontsStyles } from './globals/fonts'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ResetStyles />
    <FontsStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
)
