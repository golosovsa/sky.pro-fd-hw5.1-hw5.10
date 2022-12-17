import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/protected-route'
import Login from './pages/login'
import { Logout } from './pages/logout'
import { Main } from './pages/main'

export const AppRoutes = ({ isAuth }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}
