import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = React.lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback={<p>LOADING...</p>}>
      <App />
    </Suspense>
  </React.StrictMode>
)
