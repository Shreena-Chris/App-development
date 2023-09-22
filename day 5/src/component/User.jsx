import '../assests/css/Users.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-web';
import animation from '../assests/css/lotties/user.json';
import React,{useRef,useEffect} from 'react';



function User() {
    const navigate = useNavigate();
    const contain = useRef(null);
    useEffect(() => {
        const anim = Lottie.loadAnimation({
          container: contain.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animation,
        });
      }, []);
      const handleClick = () =>{
navigate("/dashboard");
      }
    return(
        <div>
            <div className='animation-container'>
        <div ref={contain} className='animcon'></div>
      </div>
        <div className='Users'>
            <div className='UPage1'>
                <div className='Uheader-container'>
                
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
        </div>
    );
}

export default User;