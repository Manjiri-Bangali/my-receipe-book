import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MenuActions from '../../actions/menuActions';
import Recipe from '../recipe/recipe';
import './menu.scss';

const Menu = props => {
    const dispatch = useDispatch();
    const recipeBook = useSelector(state => state.baseReducer.recipeBook);
    const menuList = useSelector(state => state.menuReducer.menuList);
    const selectedMenu = useSelector(state => state.menuReducer.selectedMenu);
    
    useEffect(() => {
        dispatch(MenuActions.fetchMenuListByCategory(recipeBook, props.match.params.categoryName));
    }, [dispatch]);

    const selectMenu = (e, menu) => {
        e.preventDefault();
        dispatch(MenuActions.selectMenu(menu));
    }
    
    return (
        <div className="container">
            <div className="list-group recipe-list">
                {
                    menuList && menuList.map(menu => (
                        <button 
                            key= {menu.recipeId}
                            type="button" 
                            className={selectedMenu && selectedMenu.recipeId === menu.recipeId ? 'active list-group-item menuTitle' : 'list-group-item menuTitle'}
                            onClick= {e => selectMenu(e, menu)}
                        >
                            {menu.recipeTitle}
                        </button>
                    ))
                } 
            </div>
            
            {
                selectedMenu &&
                <Recipe></Recipe>
            }
        </div>
    )
}

export default Menu;