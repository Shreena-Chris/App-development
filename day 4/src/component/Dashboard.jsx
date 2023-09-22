import React from 'react';
import '../assests/css/Dashboard.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';

function Dashboard() {
    //   const user=useSelector(selectUser);
    //   const email=user.user && user.user.email?user.user.email:'Guest';
    
    return (
        <div className="admin-dashboard">

            {/* <FontAwesomeIcon icon="fa-solid fa-rotate" /> */}
               <div className="header-container">
                CURRENSYNC
            </div>   
            <div  className="welcome1">
                WELCOME TO DASHBOARD
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
  <div class="card4">
   <h2 class="card-title4">Feedback</h2>
  <p class="card-content4">Check for feedback</p>
  </div>


             <div className="centered-header">
      <h1 className="header-text">Header Text Centered</h1>
    </div>
            <div className="sidebar">
                <ul>
                    <li>Users</li>
                    <li>Transactions </li>
                    <li>Currency</li>
                    <li>Exchange Rates</li>
                    <li>Settings</li>
                </ul>
            </div>
           
            
        </div>
    );
}

export default Dashboard;

