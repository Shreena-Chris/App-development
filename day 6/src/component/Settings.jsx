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
               
                <button className='btn' onClick={handleClick}>back to dashboard</button>
                
            </div>
        </div>
    );
}

export default Setting;