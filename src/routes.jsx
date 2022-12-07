import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/protected-route'
import { Login } from './pages/login'
import { Main } from './pages/main'

export const AppRoutes = ({ isAuth }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}
