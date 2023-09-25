import '../assests/css/Users.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-web';
import animation from '../assests/css/lotties/user.json';
import '../assests/css/Header.css';
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

       
    <div className="user-history">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email-ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dimple </td>
            <td>Blueholy26</td>
            <td>angeljoy@gmail.com</td>
          </tr>
          <tr>
            <td>Christopher</td>
            <td>greenKricket</td>
            <td>chris0510@gmail.com</td>
                   <button className='btn' onClick={handleClick}>Back to Dashboard</button>
                
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      
    </div>
  


    //     <div>
    //         <div className='animation-container'>
    //     <div ref={contain} className='animcon'></div>
    //   </div>
    //     <div className='Users'>
    //         <div className='UPage1'>
    //         </div>
    //     </div>
    //     </div>
     )
}

export default User;