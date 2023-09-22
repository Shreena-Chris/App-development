import React from "react";
import '../assests/css/Settings.css';
import { Link, useNavigate } from 'react-router-dom';

function Setting() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/dashboard");
    }
    return(
        <div className='ExchangeR'>
            <div className='ERPage1'>
                <div className='ERheader-container'>
               
                
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
                    <li>
                        <Link to ="/setting" style={{color:"white"}}>Settings</Link> </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Setting;