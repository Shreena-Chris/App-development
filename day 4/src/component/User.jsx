import React from 'react';
import '../assests/css/Users.css';


function User() {
    return(
        <div className='Users'>
            <div className='UPage1'>
                <div className='Uheader-container'>
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

export default User;