import { useEffect, useState } from 'react'
import { useSignupMutation } from '../../services/user'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [signup, { data, error, isLoading }] = useSignupMutation()

  useEffect(() => {
    console.log(error)
  }, [error])

  useEffect(() => {
    console.log(data)
  }, [data])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <form
      onSubmit={() =>
        signup({ email: `${username}@mail.ru`, username: username, password: password })
      }>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />{' '}
      <span>{username}</span>
      <br />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />{' '}
      <span>{password}</span>
      <br />
      <input type="submit" value="signup" />
      <br />
    </form>
  )
}

export default Login
