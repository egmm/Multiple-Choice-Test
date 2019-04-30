import { combineReducers } from 'redux'
import { testView } from './testView';
import { choices } from './choices';


const allReducers = combineReducers({
    testView,
    choices
})

export default allReducers;