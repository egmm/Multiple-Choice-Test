import { combineReducers } from 'redux'
import { testView } from './testView';
import { choices } from './choices';
import { scores } from './results';


const allReducers = combineReducers({
    testView,
    choices,
    scores
})

export default allReducers;