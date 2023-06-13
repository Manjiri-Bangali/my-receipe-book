import { FETCH_MENU_BY_CATEGORY, SELECT_MENU } from '../shared/constants';

const menuReducer = (state, action) => {
    switch(action.type) {
        case FETCH_MENU_BY_CATEGORY:
            return {
                ...state,
                menuList: [...action.menuList],
                selectedMenu: null
            }
        case SELECT_MENU:
            return {
                ...state,
                selectedMenu: {...action.selectedMenu}
            }
        default: 
            return {
                ...state
            }
    }    
}

export default menuReducer;