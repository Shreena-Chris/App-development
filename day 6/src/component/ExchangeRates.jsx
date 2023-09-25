import React from 'react';
import '../assests/css/ExchangeRates.css';
import { Link, useNavigate } from 'react-router-dom';

function ExchangeRate() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/dashboard");
    }
    return(
        <div className='ExchangeR'>
            <div className='ERPage1'>
               
                <button className='btn' onClick={handleClick}>Back to Dashboard</button>
                
            </div>
        </div>
    );
}

export default ExchangeRate;