import baseReducer from './baseReducer';
import headerReducer from './headerReducer';
import menuReducer from './menuReducer';
import recipeReducer from './recipeReducer';

import { combineReducers } from 'redux';

const rootReducer= combineReducers({
    baseReducer,
    headerReducer,
    menuReducer,
    recipeReducer
})

export default rootReducer;