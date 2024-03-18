import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className='alert alert-secondary'style={{color:"white", backgroundColor:"lightgreen", content:"()"}}> Currency: {
      <select name="currency" id="currency" style={{ color:"white", backgroundColor: "lightgreen", border: '1px solid lightgreen'}} onChange={event=>changeCurrency(event.target.value)}>
        <option value="$"style={{color:"black", backgroundColor:"lightgreen"}}>$ Dollar</option>
        <option value="£"style={{color:"black", backgroundColor:"lightgreen"}}>£ Pound</option>
        <option value="€"style={{color:"black", backgroundColor:"lightgreen"}}>€ Euro</option>
        <option value="₹"style={{color:"black", backgroundColor:"lightgreen"}}>₹ Rupee</option>
      </select>	
      }	
    </div>
    );
    };

export default CurrencyList;