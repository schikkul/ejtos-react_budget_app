import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = (props) => {
    const {dispatch } = useContext(AppContext);
    const setCurr = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurr(event.target.value)}>
                <option>Currency (£ Pound)</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;
