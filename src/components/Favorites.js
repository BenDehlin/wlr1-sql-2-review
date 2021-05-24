import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

const Favorites = (props) => {
  const {user} = useContext(UserContext)
  console.log(user)
  return (
    <div></div>
  )
}

export default Favorites