import React, { useState } from 'react';
import '../assests/css/CurrencyDeets.css';

const CurrencyManagementPage = () => {
  // Sample currency data (you would fetch this from a backend)
  const initialCurrencies = [
    {
      id: 1,
      currencySymbol: '$',
      currencyShortForm: 'USD',
      currencyFullForm: 'United States Dollar',
    },
    {
      id: 2,
      currencySymbol: '€',
      currencyShortForm: 'EUR',
      currencyFullForm: 'Euro',
    },
    {
      id: 3,
      currencySymbol: '£',
      currencyShortForm: 'GBP',
      currencyFullForm: 'British Pound Sterling',
    },
    {
      id: 4,
      currencySymbol: '¥',
      currencyShortForm: 'JPY',
      currencyFullForm: 'Japanese Yen',
    },
    {
      id: 5,
      currencySymbol: 'A$',
      currencyShortForm: 'AUD',
      currencyFullForm: 'Australian Dollar',
    },
    // Add more currencies here...
  ];

  const [currencies, setCurrencies] = useState(initialCurrencies);

  return (
    <div>
      <h1>Currency Management</h1>
      <table>
        <thead>
          <tr>
            <th>Currency ID</th>
            <th>Currency Symbol</th>
            <th>Currency Short Form</th>
            <th>Currency Full Form</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency.id}>
              <td>{currency.id}</td>
              <td>{currency.currencySymbol}</td>
              <td>{currency.currencyShortForm}</td>
              <td>{currency.currencyFullForm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyManagementPage;