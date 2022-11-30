import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import Login from './pages/login/Login'
import NotFound from './pages/not-found/not-found'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
