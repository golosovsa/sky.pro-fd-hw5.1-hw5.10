import { Provider } from 'react-redux'
import { store } from './store/store'
import { useLoginMutation } from './services/user'

function App() {
  return (
    <Provider store={store}>
      <ProvidedApp />
    </Provider>
  )
}

function ProvidedApp() {
  const [login, state] = useLoginMutation()

  const handleLogin = () => {
    login({
      email: 'grm@grm.ru',
      password: 'qwert1234!@#$'
    })
  }

  return (
    <>
      <h1>The app</h1>
      <p>lorem20</p>
      <button onClick={handleLogin} disabled={state.isLoading}>
        Login
      </button>
      <p>{JSON.stringify(state) || 'empty'}</p>
    </>
  )
}

export default App
