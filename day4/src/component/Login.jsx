import React, { useState } from 'react'; // Import useState
import '../assests/css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/UserSlice';

const Login = () => {
  const dispatch = useDispatch();
  const nav=useNavigate();

  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here, you can add your logic for handling the form submission
    // For example, you can dispatch an action to authenticate the user.
    // You can also perform validation and error handling as needed.

    // Example dispatch action:
    // dispatch(loginUser({ username, password }));

    // Clear the form fields
    setUsername('');
    setPassword('');
    dispatch(login(username));
    nav("/dashboard");
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function to onSubmit */}
          <div>LOGIN</div>
          <br />
          <input
            className="input-field"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            value={username} // Bind the value to the state variable
            onChange={(e) => setUsername(e.target.value)} // Handle input changes
          />
          <input
            className="input-field"
            type="password" // Use type="password" for password input
            name="password"
            id="password"
            placeholder="Password"
            required
            value={password} // Bind the value to the state variable
            onChange={(e) => setPassword(e.target.value)} // Handle input changes
          />
          <button className="jello-horizontal" type="submit">
            Login
          </button>
          <p>
            Create an account{' '}
            <Link to="/signup">
              <span style={{ color: 'black' }}>Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
      <img
        className="image-container"
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGPVzUMY44ZTq36-jwfyY2TDzCEPi0lvKu6Anv7BohCl6KZq3W"
        alt="Image 3"
      />
    </div>
  );
};

export default Login;
