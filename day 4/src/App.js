
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './component/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Currency from './component/Currency';
import User from './component/User';
import Transaction from './component/Transaction';
 import AdminDashboard from './component/Dashboard';
import Dashboard from './component/Dashboard';
import ExchangeRate from './component/ExchangeRates';



function App() {
  return (
    <div >
         <BrowserRouter>
         <Routes>
           <Route  path="/" element={<Login/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/ExchangeRate" element={<ExchangeRate/>}/>
         </Routes>
       </BrowserRouter>
      
    
    </div>
  );
}

export default App;







