import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logOut } from '../../app/store/slices/auth'

export const Logout = () => {
  const dispatch = useDispatch()
  useState(() => {
    dispatch(logOut())
  })
  return <Navigate to="/" />
}
