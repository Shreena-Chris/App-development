import React from 'react';
import '../assests/css/ExchangeRates.css';


function ExchangeRate() {
    return(
        <div className='ExchangeR'>
            <div className='ERPage1'>
                <div className='ERheader-container'>
                     CURRENCYSYNC
                </div>
                <div className="sidebar">
                <ul>
                    <li>Users</li>
                    <li>Transactions </li>
                    <li>Currency</li>
                    <li>Exchange Rates</li>
                    <li>Settings</li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default ExchangeRate;