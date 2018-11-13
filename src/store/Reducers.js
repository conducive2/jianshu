import {combineReducers} from 'redux'
import {reducer as haederReaducer} from '../common/header/store'
const reducer =combineReducers({
    header:haederReaducer
})
export default reducer