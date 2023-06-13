import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as RecipeActions from '../../actions/recipeActions';
import * as BaseActions from '../../actions/baseActions';
import * as Utilities from '../../shared/utilities';

const Recipe = props => {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.recipeReducer.ingredients);
    const selectedMultipier = useSelector(state => state.recipeReducer.selectedMultipier);
    const selectedMenu = useSelector(state => state.menuReducer.selectedMenu);
    const finalOrder = useSelector(state => state.baseReducer.finalOrder);

    useEffect(() => {
        console.log('In Recipe Component')
        
    }, [dispatch, selectedMenu]);

    const selectMultipier= (e, multipier) => {
        e.preventDefault();
        dispatch(RecipeActions.selectMultipier(multipier));
    }

    const addToOrder= () => {
        dispatch(BaseActions.addToOrder(selectedMenu, selectedMultipier, finalOrder));
    }

    return (
        <div className="recipe-container">
            <div>
                <h1>{selectedMenu.recipeTitle}</h1>
                <button 
                    className={selectedMultipier === 1 ? 'active multiplier' : 'multiplier'} 
                    type="button" 
                    title="For 1-2 people"
                    onClick={(e) => selectMultipier(e, 1)}
                >1x</button>
                <button 
                    className={selectedMultipier === 2 ? 'active multiplier' : 'multiplier'} 
                    type="button" 
                    title="For 3-4 people"
                    onClick={(e) => selectMultipier(e, 2)}
                >2x</button>
                <button 
                    className={selectedMultipier === 3 ? 'active multiplier' : 'multiplier'} 
                    type="button" 
                    title="For 5-6 people"
                    onClick={(e) => selectMultipier(e, 3)}
                >3x</button>

                <button 
                    className="add-to-order btn btn-success" 
                    type="button"
                    onClick={addToOrder}
                >Add To Order</button>
            </div>
            <p className="recipe-info">{selectedMenu.info}</p>

            <h3>Ingredients</h3>
            <ul>
                {
                    selectedMenu.ingredients.map(item => {
                        let result= Utilities.convertUnits(item.quantity, selectedMultipier);
                        return (
                            <li key={item.name}>
                                <span>{result.figure}</span> &nbsp;
                                <span>{result.unit}</span> &nbsp;
                                <span>{item.name}</span>
                            </li>
                        )
                    })
                }
            </ul>

            <h3>Procedure</h3>
            <ul>
                {
                    selectedMenu.description.map((line, index) => (
                        <li key={index}>
                            {line}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Recipe;