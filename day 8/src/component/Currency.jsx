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
                
                <button className='btn' onClick={handleClick}>Back to Dashboard</button>
            <div className="centered-header">
      
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
           
            </div>
        </div>
        

    );
}
export default Currency;