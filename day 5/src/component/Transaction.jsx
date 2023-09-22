import * as React from 'react';
import '../assests/css/Transaction.css';

import { Link, useNavigate } from 'react-router-dom';
function Transaction() {

    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/dashboard");
    }
    return(
        <div className='Transaction'>
            <div className='TPage1'>
                <div className='Theader-container'>
              
                
                CURRENSYNC
               
                </div>
                <button className='btn' onClick={handleClick}>back to dashboard</button>
                <div className="sidebar">
                <ul>
                <li>
                        <Link to="/User" style={{color:"white"}}>Users</Link>
                        </li>
                       <li>
                        
                    <Link to="/transaction"style={{color:"white"}}>Transactions </Link>
                        </li> 
                        <li>

                    <Link to="/currency"style={{color:"white"}}>Currency</Link>
                        </li>
                        <li>

                    <Link to="/ExchangeRate"style={{color:"white"}}>Exchange Rates</Link>
                        </li>
                    <li>Settings</li>
                </ul>
            </div>
            </div>
        </div>
    );
}
export default Transaction;