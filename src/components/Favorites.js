import {useSelector} from 'react-redux'

const Favorites = (props) => {
  const {user} = useSelector((s) => s.authReducer)
  console.log(user)
  return (
    <div></div>
  )
}

export default Favorites