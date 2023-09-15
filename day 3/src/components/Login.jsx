  import * as React from 'react';
  import '../assests/css/App.css';

const Login = () => {
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
    console.log(formdata);
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <form action="" onSubmit={submitForm}>
          <div>LOGIN</div>
          <input
            className="input-field"
            type="text"
            name="username"
            id="username"
            onChange={handleOnChange}
            placeholder="Username"
          />
          <input
            className="input-field"
            type="text"
            name="password"
            id="password"
            onChange={handleOnChange}
            placeholder="Password"
          />
          <button className="submit-button rotate-center kenburns-top-left color-change-2x" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};



  
  
  export default Login;