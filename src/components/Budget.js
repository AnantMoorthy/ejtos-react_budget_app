import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import totalExpenses from './ExpenseTotal';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (newBudget<totalExpenses){
            alert("You cannot reduce budget value lower than spending");
            return (newBudget);
        }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
    
};
export default Budget;
