import { SELECT_MULTIPLIER } from '../shared/constants';

const recipeReducer = (state= {selectedMultipier : 1}, action) => {
    switch(action.type) {
        case SELECT_MULTIPLIER:
            return {
                ...state,
                selectedMultipier: action.multiplier
            }
        default: 
            return {
                ...state
            }
    }    
}

export default recipeReducer;