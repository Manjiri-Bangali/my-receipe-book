import { FETCH_MENU_BY_CATEGORY, SELECT_MENU } from '../shared/constants';
// import recipeBook from '../data/recipes';
// import axios from 'axios';

export const fetchMenuListByCategory = (recipeBook, category) => {
    // fetch a filteered list by category type from backend 

    // const filteredList = recipeBook.filter(recipe => recipe.type === category);

    // return {
    //     type: FETCH_MENU_BY_CATEGORY,
    //     menuList: [...filteredList]
    // }
    return async (dispatch) => {
        let promise1= new Promise((resolve, reject) => {
            setTimeout(() => {
                const filteredList = recipeBook.filter(recipe => recipe.type === category);
                resolve(filteredList);
            }, 1000);
        })
    
        let data= await promise1;
        console.log(data);
    
        dispatch({
            type: FETCH_MENU_BY_CATEGORY,
            menuList: [...data]
        });
    }
}

export const selectMenu = menu => {
    
    return {
        type: SELECT_MENU,
        selectedMenu: {...menu}
    }
}