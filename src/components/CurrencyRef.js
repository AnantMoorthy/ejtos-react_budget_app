import React, { createContext, useContext, useState } from 'react';

const CurrencyRef = createContext();

export const CurrencyProvider = ({ children }) => {
const [selectedCurrency, setSelectedCurrency] = useState('£');

const changeCurrency = (currency) => {
setSelectedCurrency(currency);
};

return (
<CurrencyRef.Provider value={{ selectedCurrency, changeCurrency }}>
      {children}
</CurrencyRef.Provider>
);
};

export const useCurrency = () => {
return useContext(CurrencyRef);
};
export default CurrencyRef;