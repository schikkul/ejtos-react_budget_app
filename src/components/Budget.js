import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { budget,currency,dispatch,expenses } = useContext(AppContext);
    const setBudget = (val) => {
        if(val > 20000) {
            alert("The budget value cannot exceed upperlimit "+currency+"20000");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if((budget - totalExpenses) < 0 ){
            alert("The budget value cannot be below the amount spent "+currency+totalExpenses);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(val)
        });
    };
    return (
        <div className='alert alert-secondary'>
            <label for="budget">Budget {currency}</label>
            <input required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        min = "0" max = "20000" step = "10"
                        onChange={(event) => setBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;
