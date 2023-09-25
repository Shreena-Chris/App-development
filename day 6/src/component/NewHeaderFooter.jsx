import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/NewHeaderFooter.css';

function Newnew()
{
    return(
        <div className='Landhead'>
            X-Spendibles
            <div className='Curcal'> Currency Calculator</div>
        <div className='Insights'>Market Insights</div>
        <div className='Wallet'> Wallet </div>
        <div className='Logog'>
            <button >
                LOGIN
                </button>
             
                </div>
                <div className='Landfooter'>
                <div className="priv"> 
                 Privacy policy
                 </div>
                 <div className="Terms">
                   <Link to="/Tt" style={{ color: "white" }}> Terms & Conditions</Link></div>
                   <div className="Faq">FAQ</div>
                   <div className="contact">Contact</div>
                   <div className="copyright">© 2023 X-Spendibles</div>

                </div>
        </div>
    )
}
export default Newnew;