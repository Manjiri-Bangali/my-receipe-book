import React, { useEffect } from 'react';
import './header.scss';
import { useSelector } from 'react-redux';
import * as Utilities from '../../shared/utilities';
import { jsPDF } from "jspdf";

const HeaderComponent = props => {
    const finalOrder = useSelector(state => state.baseReducer.finalOrder);

    useEffect(() => {
        console.log("final Order in header= ", finalOrder);
    }, [finalOrder])

    const downloadList = () => {
        let result= [];
        const doc = new jsPDF();
        for(const item in finalOrder) {
            // const converted = Utilities.convertUnits({"figure": finalOrder[item], "unit": "gram"}, 1);
            result.push(`${finalOrder[item]} grams ${item}`);
        }
        
        doc.text('ITEMS TO BUY', 50, 10, {
            align: 'center'
        });
        result.forEach(function(resRow, i){
            doc.text(20, 30 + (i * 10), resRow);
        });
        doc.save('groceryList.pdf');
    }

    return (
        <div className="heading-wrapper">
            <div className="heading">
                <div className="title">
                    My Recipe Book
                </div>
                <div className="cart">
                    <button 
                        className="btn btn-primary" 
                        type="button" 
                        onClick={downloadList}
                        disabled= {finalOrder && Object.keys(finalOrder).length > 0 ? false : true}
                    >Download Grocery List</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;