import '../assests/css/ForgotPassword.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-web';
import animation from '../assests/css/lotties/user.json';
import '../assests/css/Header.css';
import React,{useRef,useEffect} from 'react';



function Feedback() {
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

       
    <div className="feed">
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Username</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 </td>
            <td>Dimple</td>
            <td>Goood</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Christopher</td>
            <td>user friendly</td>
                   <button className='btn' onClick={handleClick}>Back to Dashboard</button>
                
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      
    </div>
  


     )
}

export default Feedback;