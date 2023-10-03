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
             
          
       
        <div class="card">
   <h2 class="card-title">Total number of users</h2>
  <p class="card-content">500</p>

  {/* <a href="#" class="card-button">Learn More</a>  */}
</div>
<div class="card1">
   <h2 class="card-title1">
    <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Number of transactions</p>
    </h2>
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


            
           
            
        </div>
    );
}

export default Dashboard;

