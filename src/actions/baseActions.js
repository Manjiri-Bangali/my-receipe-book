import { ADD_TO_ORDER } from '../shared/constants';

export const addToOrder = (selectedMenu, selectedMultipier, finalOrder) => {
    selectedMenu.ingredients.forEach(item => {
        finalOrder[item.name] = finalOrder[item.name] ? (finalOrder[item.name] + item.quantity.figure * selectedMultipier) : item.quantity.figure * selectedMultipier
    });
    return {
        type: ADD_TO_ORDER,
        finalOrder: {...finalOrder}
    }
}