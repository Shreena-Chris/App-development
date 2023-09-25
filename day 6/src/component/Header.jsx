import React from "react";
import { useState } from "react";
import '../assests/css/Header.css';
import { Link } from 'react-router-dom';
import {FaUserCircle} from  'react-icons/fa';
import {HiOutlineArrowPath} from  'react-icons/hi2';
import {PiMoneyLight } from "react-icons/pi";
import { MdOutlineAutoGraph } from "react-icons/md";
import {CiSettings} from "react-icons/ci";
import {BsQuestionOctagon} from "react-icons/bs";
import {VscFeedback} from "react-icons/vsc";
import User from "./User";
import Dashboard from "./Dashboard";
import ExchangeRate from "./ExchangeRates";
import Currency from "./Currency";
import Transaction from "./Transaction";
import ForgotPassword from "./ForgotPassword";
import Feedback from "./Feedback";
import Setting from "./Settings";
import Term from "./TermsCon";

function Header()
{
    const [selectedOption, setSelectedOption] = useState("Dashboard"); // Initialize with the default option

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
  let content = null;
   
      switch (selectedOption) {
        case 'Dashboard':
          content = <Dashboard />;
          break;
        case 'Users':
          content = <User />;
          break;
        case 'Transactions':
         content = <Transaction />;
         break;
        case 'Currency' :
          content= <Currency/>
          break;
        case 'ExchangeRate':
          content= <ExchangeRate/>
          break;
          case 'Forgotpassword':
            content= <ForgotPassword/>
            break;
           case 'Feedback':
           content= <Feedback/>
            break;
         case 'Setting':
           content= <Setting/>
           break;
        default:
          return null;
      }  
    return(
        <div>
        <>
        <div className="headcon">
            X-Spendibles</div>
            <div className="sidebar">
      <ul>
        <li>
        <Link to="" onClick={()=>handleOptionSelect("Users")}style={{color:"white"}}>
          <button>    <FaUserCircle onClick={()=>handleOptionSelect("Users")} className="iconu" />
          Users
          </button>
            </Link>
        </li>
        <li>
            
        <Link to="" onClick={()=>handleOptionSelect("Transactions")}style={{color:"white"}}>
          <button> <HiOutlineArrowPath onClick={()=>handleOptionSelect("Transactions")} className="icont" />
            Transactions
            </button>
             </Link>
        </li>

        <li>
        <Link to="" onClick={()=>handleOptionSelect("Currency")}style={{color:"white"}}>
          <button> <PiMoneyLight onClick={()=>handleOptionSelect("Currency")} className="iconer"/>
            Currency
            </button>
        </Link>
        </li>
        
        <li>
        <Link to="" onClick={()=>handleOptionSelect("ExchangeRate")}style={{color:"white"}}>
          <button> < MdOutlineAutoGraph onClick={()=>handleOptionSelect("ExchangeRate")} className="iconex" />
            Exchange Rate
            </button>
        </Link>
        </li>
        <li>
        <Link to=""onClick={()=>handleOptionSelect("Feedback")}style={{color:"white"}}>
          <button> < VscFeedback  onClick={()=>handleOptionSelect("Feedback")} className="iconex" />
            Feedback
            </button>
        </Link>
        </li>
        <li>
        <Link to=""onClick={()=>handleOptionSelect("Forgotpassword")}style={{color:"white"}}>
          <button> <BsQuestionOctagon onClick={()=>handleOptionSelect("Forgotpassword")}className="iconex" />
            Forgot Password
            </button>
        </Link>
        </li>
        <li>
        <Link to ="" onClick={()=>handleOptionSelect("Setting")}style={{color:"white"}}>
          <button> <CiSettings onClick={()=>handleOptionSelect("Setting")} className="iconfp" />
            Settings</button>
        </Link>
        </li>
      </ul>
    </div>
    <div>

    </div>
    <div className="footer">
    <div className="priv"> 
        Privacy policy
     
        </div>
    <div className="Terms">
    <Link to="/Tt" style={{ color: "white" }}>
  Terms & Conditions
</Link>

        </div>
    <div className="Faq">FAQ</div>
    <div className="contact">Contact</div>
    <div className="copyright">© 2023 X-Spendibles</div>

        </div>
            </>
            {content}
            </div>     
    )
}
export default Header ;