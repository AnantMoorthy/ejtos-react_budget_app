import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (expense)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: expense,
            })
    }
    

  return (
        <div className='alert alert-secondary'> currency {
      <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">Pound(£)</option>
        <option value="₹">Rupee(₹)</option>
        <option value="€">Euro(€)</option>
        <option value="$">Dollar($)</option>
      </select>	
      }	
    </div>
    );
    };

export default CurrencyList;