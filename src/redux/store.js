// import createStore and combineReducers
import {createStore, combineReducers} from 'redux'
// import all of our reducers
import movieReducer from './movieReducer'
import authReducer from './authReducer'

// combine the reducers into 1
const rootReducer = combineReducers({
  movieReducer, authReducer
})

// export our store
export default createStore(rootReducer)