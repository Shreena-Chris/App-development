import React from 'react';
import '../assests/css/Currency.css';
import {BsCurrencyRupee} from 'react-icons/bs';
import {BiDollar} from 'react-icons/bi';
import {BsCurrencyEuro} from 'react-icons/bs';



function Currency() {
    return(
        <div className='Currency'>
            <div className='CPage1'>
                <div className='Cheader-container'>
                    CURRENCYSYNC
                </div>
            <div className="centered-header">
      <h1 className="header-text">Header Text Centered</h1>
    </div>
    <div className='Rupee'>
    <BsCurrencyRupee/>
    <div className='RupeeWord'>
        Rupee
    </div>
    <div className='Dollar'>
        <BiDollar/>
        <div className='DollarWord'>
            US Dollar
        </div>
    </div>
    <div className='Euro'>
        <BsCurrencyEuro/>
        <div className='EuroWord'>
            EURO
        </div>
    </div>

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
export default Currency;