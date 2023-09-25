import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './component/redux/store';
// import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Login from './component/Login';
// import Signup from './component/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

<App/>
  </Provider>
);