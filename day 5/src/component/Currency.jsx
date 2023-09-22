import React from 'react';
import '../assests/css/Currency.css';
import {BsCurrencyRupee} from 'react-icons/bs';
import {BiDollar} from 'react-icons/bi';
import {BsCurrencyEuro} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';


function Currency() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/dashboard");
    }

    return(
        <div className='Currency'>
            <div className='CPage1'>
                <div className='Cheader-container'>
                    CURRENCYSYNC
                </div>
                <button className='btn' onClick={handleClick}>back to dashboard</button>
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
                        <li>
                        <Link to ="/setting" style={{color:"white"}}>Settings</Link> </li>
                </ul>
            </div>
            </div>
        </div>
        

    );
}
export default Currency;