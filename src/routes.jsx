import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom'
import LoadingError from './components/loading-error'
import { ProtectedRoute } from './components/protected-route'
import Collection from './pages/collections'
import Favorites from './pages/favorites'
import Login from './pages/login'
import { Logout } from './pages/logout'
import { Main } from './pages/main'
import NotFound from './pages/not-found'

export const AppRoutes = ({ isAuth }) => {
  return (
    <ErrorBoundary FallbackComponent={LoadingError} onReset={() => window.location.reload(false)}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/collection/:id" element={<Collection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </ErrorBoundary>
  )
}
