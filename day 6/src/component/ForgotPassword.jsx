import * as React from 'react';
import '../assests/css/ForgotPassword.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ForgotPassword= () => {
  const navigate=useNavigate();
  
 
const [formdata, setFormdata] = React.useState({
  username: '',
  password: '',
});

const handleOnChange = (e) => {
  const [name, value] = [e.target.name, e.target.value];
  setFormdata({
    ...formdata,
    [name]: value,
  });
};

const submitForm = (e) => {
  e.preventDefault();
  navigate("/login"); 
  console.log(formdata);
};

return (
    <div className="fppage"> 
      
   
    <div className="fpContainer">
      <form action="" onSubmit={submitForm}>
        
        <div className='.text'>Forgot Password</div>
        <input
          className="input-fieldfp"
          type="text"
          name="username"
          id="username"
          onChange={handleOnChange}
          placeholder="username"
          required
        />
        <input
          className="input-fieldfp"
          type="text"
          name=" New Password"
          id="New Password"
          onChange={handleOnChange}
          placeholder="New Password"
          required
        />
        <input
          className="input-fieldfp"
          type="text"
          name="Confirm  Password"
          id="Confirm Password"
          onChange={handleOnChange}
          placeholder="Confirm Password"
          required
      
        />
        <button className="submit-button rotate-center kenburns-top-left color-change1-2x" type="submit">
          Confirm
          <div className='.color-change1-2x'></div>
        </button>
        {/* <p>Already have an account <Link to="/"><span style={{color:'black'}}>Login</span></Link></p> */}
      </form>
    </div>
   
  </div>
);
};





export default ForgotPassword;