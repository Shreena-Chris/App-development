import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/NewHeaderFooter.css';

function Newnew()
{
    return(
        <div className='Landhead'>
            X-Spendibles
            <div className='Curcal'> <Link to ='/con'style={{ color: "white" }}>Currency Calculator</Link></div>
        <div className='Insights'><Link to ='/mi'style={{ color: "white" }}>Market Insights</Link></div>
        <div className='Wallet'> Wallet </div>
        <div className='Logog'>
            <button >
                LOGIN
                </button>
             
                </div>
                <div className='Landfooter'>
                <div className="priv"> 
                 <Link to = '/priv'style={{ color: "white" }}>Privacy policy</Link>
                 </div>
                 <div className="Terms">
                   <Link to="/Tt" style={{ color: "white" }}> Terms & Conditions</Link></div>
                   <div className="Faq"><Link to="/faq" style={{ color: "white" }}>FAQ</Link></div>
                   <div className="contact"></div>
                   <div className="copyright">© 2023 X-Spendibles</div>

                </div>
        </div>
    )
}
export default Newnew;