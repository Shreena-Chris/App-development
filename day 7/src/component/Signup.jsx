import * as React from 'react';
import '../assests/css/Signup.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Lottie from 'lottie-web';
// import animationDat from '../assests/css/lotties/anim.json'
const Signup = () => {
  const navigate=useNavigate();
  // const container=React.useRef(null);
  // React.useEffect(() => {
  //   const anim = Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationDat,
  //   });

  //   // Optionally, you can pause the animation when unmounting the component
  //   return () => {
  //     anim.destroy();
  //   };
  // }, []);
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
    <div className="loginPage1">
     
      
      {/* <div className='animationc'>
        <div ref={container} className='animcon'></div>
      </div> */}
    <div className="loginContainer1">
      <form action="" onSubmit={submitForm}>
        
        <div>SIGNUP</div>
        <input
          className="input-field1"
          type="text"
          name="firstname"
          id="firstname"
          onChange={handleOnChange}
          placeholder="First name"
          required
        />
        <input
          className="input-field1"
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleOnChange}
          placeholder="Last name"
          required
        />
        <input
          className="input-field1"
          type="text"
          name="email"
          id="email"
          onChange={handleOnChange}
          placeholder="E-mail"
          required
        />
        <input
          className="input-field1"
          type="text"
          name="password"
          id="password"
          onChange={handleOnChange}
          placeholder="password"
          required
        />
         <input
          className="input-field1"
          type="text"
          name="password"
          id="password"
          onChange={handleOnChange}
          placeholder="Confirm password"
          required
        />
        <button className="submit-button rotate-center kenburns-top-left color-change1-2x" type="submit">
          Confirm
          <div className='.color-change1-2x'></div>
        </button>
        <p>Already have an account <Link to="/"><span style={{color:'black'}}>Login</span></Link></p>
      </form>
    </div>
   
  </div>
);
};





export default Signup;