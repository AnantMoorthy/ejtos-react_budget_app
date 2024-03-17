import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import { useCurrency } from "./CurrencyRef";
/*const Remaining = () => {
    const currencyRemaining = 100;
    const { selectedCurrency } = useCurrency();
    return (
      <div>
        Remaining:
        {selectedCurrency} {currencyRemaining}
      </div>
    );
  };
  
  export default Remaining;*/
const Remaining = () => {
    //const currencyRemaining = 100;
    //const { selectedCurrency } = useCurrency();
    
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
            
        </div>
        
    );
};
export default Remaining;
