import {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'

const Auth = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {handleLogin, handleRegister} = useContext(UserContext)
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleLogin(email, password)}>Login</button>
      <button onClick={() => handleRegister(email, password)}>Register</button>
    </div>
  )
}