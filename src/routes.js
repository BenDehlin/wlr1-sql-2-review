import {Switch, Route} from 'react-router-dom'
import Dash from './components/Dash'
import Auth from './components/Auth'
import Movies from './components/Movies'
import Favorites from './components/Favorites'

export default (
  <Switch>
    <Route exact path ='/' component={Dash} />
    <Route path='/auth' component={Auth} />
    <Route path='/movies' component={Movies} />
    <Route path='/favorites' component={Favorites} />
  </Switch>
)