import * as React from 'react';
import '../assests/css/Transaction.css';


function Transaction() {
    return(
        <div className='Transaction'>
            <div className='TPage1'>
                <div className='Theader-container'>
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
export default Transaction;