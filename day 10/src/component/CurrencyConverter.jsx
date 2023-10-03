import React, { useState } from 'react';
import '../assests/css/CurrencyConverter.css';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
    const exchangeRates = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.46,
        AUD: 1.34,
        CAD: 1.26,
        INR: 73.58, // Indian Rupee
        // Add more currencies here
      };
      


function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');

  const convertCurrency = () => {
    if (amount && fromCurrency && toCurrency) {
      const convertedAmount =
        (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
      setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    }
  };

  return (
    <div className="CC1">
        
         <div className='kenburns-top'>

      <img src ="https://res.cloudinary.com/dkswc1cvm/image/upload/v1695561124/moneymoney_ip1lr4.jpg " alt=""/> 
      
    </div> 
      
      <div className="CCinputcontainer">
      <h1 className="app-title">Currency Converter</h1>
        <input
          type="number"
          placeholder="Enter amount"
          className="amount-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {/* <h3 style={{color:"black"}}>Select Currencies for Conversion</h3> */}
        <select
          className="from-currency-select"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        

        <select
          className="to-currency-select"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button className="convert-button" onClick={convertCurrency}>
          Convert
        </button>
      {result && <p className="conversion-result">{result}</p>}
      </div>
    
  
    </div>
    
    
  );
}




export default CurrencyConvertor;