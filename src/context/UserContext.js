import {createContext, useState} from 'react'
import axios from 'axios'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const handleRegister = (email, password) => {
    axios.post('/auth/register', {email, password})
    .then((res) => {
      setUser(res.data)
    }).catch(err => console.log(err))
  }
  const handleLogin = (email, password) => {
    axios.post('/auth/login', {email, password})
    .then((res) => {
      setUser(res.data)
    }).catch((err) => console.log(err))
  }
  return(
    <UserContext.Provider value={{
      user,
      setUser,
      handleRegister,
      handleLogin
    }}>
      {children}
    </UserContext.Provider>
  )
}