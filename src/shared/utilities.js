/*
1 tablespoon = 15 grams 
1 cup = 128 grams
1 teaspoon = 5 grams
1 pound = 450 grams
*/

export const convertUnits = (quantity, selectedMultipier) => {
    let resQuantity = {};
    let calcultedFigure = quantity.figure * selectedMultipier;
    if(quantity.unit === "gram") {
        if(calcultedFigure > 450) {
            resQuantity.figure = (calcultedFigure / 450).toFixed(2);
            resQuantity.unit = "Pound";
        } else if(calcultedFigure > 128) {
            resQuantity.figure = (calcultedFigure / 128).toFixed(2);
            resQuantity.unit = "Cups";
        } else if(calcultedFigure > 15) {
            resQuantity.figure = (calcultedFigure / 15).toFixed(2);
            resQuantity.unit = "Tablespoons";
        } else {
            resQuantity.figure = (calcultedFigure / 5).toFixed(2);
            resQuantity.unit = "Teaspoons";
        }

        return resQuantity;
    }
    return quantity;
}


