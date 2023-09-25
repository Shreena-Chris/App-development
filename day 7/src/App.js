
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './component/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import Currency from './component/Currency';
import User from './component/User';
import TransactionManagementPage from './component/Transaction';
import Dashboard from './component/Dashboard';
import Setting from './component/Settings';
import ExchangeRate from './component/ExchangeRates';
import Header from './component/Header';
import ForgotPassword from './component/ForgotPassword';
import Feedback from './component/Feedback';
import CurrencyConvertor from './component/CurrencyConverter';
import Term from './component/TermsCon';
import Land from'./component/Landing';
import Newnew from './component/NewHeaderFooter';
import DailyMetric from './component/Graph'; 
import CustomerManagementPage from './component/Some';
import MarketInsightsTable from './component/Market';
import PrivPolicy from './component/Privpol';
import CurrencyManagementPage from './component/CurrencyDeets';
import Faq from './component/Faq';


function App() {
  return (
    <div >
         <BrowserRouter>
         <Routes>
           <Route  path="/" element={<Login/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/ExchangeRate" element={<ExchangeRate/>}/>
           <Route path="/User" element={<User/>}/>
           <Route path="/transaction" element={<TransactionManagementPage/>}/>
           <Route path='/currency' element={<Currency/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path='/setting' element={<Setting/>}/>
           <Route path='/head' element={<Header/>}/>
           <Route path='/fp' element={<ForgotPassword/>}/>
           <Route path = '/feed' element={<Feedback/>}/>
           <Route path = '/Tt' element={<Term/>}/>
           <Route path ='/con' element={<CurrencyConvertor/>}/>
            <Route path ='/Lp' element={<Land/>} /> 
           <Route path ='/nn' element={<Newnew/>} />
           <Route path ='/graph' element={<DailyMetric/>} />
           <Route path ='/some' element={<CustomerManagementPage/>} />
           <Route path ='/mi' element={<MarketInsightsTable/>} />
           <Route path ='/priv' element={<PrivPolicy/>} />
           <Route path ='/cmp' element={<CurrencyManagementPage/>} />
           <Route path ='/priv' element={<PrivPolicy/>} />
           <Route path ='/faq' element={<Faq/>} />

         </Routes>
       </BrowserRouter>
      
    
    </div>
  );
}

export default App;







