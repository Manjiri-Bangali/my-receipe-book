import { ADD_TO_ORDER } from '../shared/constants';
import initialState from '../shared/initialState';

const baseReducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_TO_ORDER:
            return {
                ...state,
                finalOrder: {...action.finalOrder}
            }
        default: 
            return {
                ...state
            }
    }    
}

export default baseReducer;