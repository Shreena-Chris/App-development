import React from 'react';
import '../assests/css/Dashboard.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userslice';
import { Link } from 'react-router-dom';
function Dashboard() {
      const user=useSelector(selectUser);
      const username=user.user && user.user.username?user.user.username:'Guest';
    
    return (
        <div className="admin-dashboard">

            {/* <FontAwesomeIcon icon="fa-solid fa-rotate" /> */}
               <div className="header-container">
                CURRENSYNC   
            </div>   
            <div  className="welcome1">
                Welcome to dashboard admin {username}
        </div>
       
        <div class="card">
   <h2 class="card-title">Total number of users</h2>
  <p class="card-content">500</p>

  {/* <a href="#" class="card-button">Learn More</a>  */}
</div>
<div class="card1">
   <h2 class="card-title1">Number of transactions</h2>
  <p class="card-content1">200</p>
  </div>
  <div class="card2">
   <h2 class="card-title2">Most used Currency</h2>
  <p class="card-content2">$</p>
  </div>
  <div class="card3">
   <h2 class="card-title3">Feedback</h2>
  <p class="card-content3">Check for feedback</p>
  </div>
  {/* <div class="card4">
   <h2 class="card-title4">Feedback</h2>
  <p class="card-content4">Check for feedback</p>
  </div> */}


             <div className="centered-header">
      <h1 className="header-text">Header Text Centered</h1>
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
    );
}

export default Dashboard;

