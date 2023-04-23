import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
  const [  setCurrency ] = useState('');
  const {dispatch } = useContext(AppContext);

    const updateCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
            });
        setCurrency(event.target.value);
        return;
    }



   return (
		<div className='alert alert-secondary' style={{backgroundColor:'lightgreen'}}>
        <label style={{marginLeft: '1rem' , backgroundColor:'lightgreen', color:'white'}} >Currency (
      <select name='currency'id="currency" onChange={(event)=>updateCurrency(event)}
       style={{backgroundColor: 'lightgreen', color:'white'}}>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Ruppee</option>
      </select>	
        )</label>
    </div>

	);
};

export default Currency;