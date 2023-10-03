import React, { useEffect, useRef } from 'react';
import '../assests/css/Faq.css';
import Lottie from 'lottie-web';
import animationland from '../assests/css/lotties/FAQ.json';
import Newnew from './NewHeaderFooter';


function Faq()
{
    const contain = useRef(null);

  useEffect(() => {
  const anim = Lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationland,
    });
    return () => {
      anim.destroy();
    };
  }, []);
    return(
        <>
        <Newnew/>
        <div className="faqpage">
             <div className='animation-containerfaq'> 
            <div ref={contain} className='animconf'></div>
          </div>
            
          <div className="faqcontainer">
            <h1> FAQ of X-spendibles</h1>
          <h2>
              Welcome to FAQ section of X-spendibles Currency Exchange Platform 
           </h2>

           <h2>1.What is X-Spendibles?</h2>
           <p>X-Spendibles is a currency exchange platform that allows you to securely and conveniently exchange one currency for another, whether for travel, business, or personal needs.</p>

           <h2> 2.Is X-Spendibles safe to use?</h2>

           <p>Yes, X-Spendibles takes the security of your transactions seriously. We use state-of-the-art encryption and security measures to protect your data and transactions.</p>

           <h2>3.How can I get started with X-Spendibles?</h2>
           <p>To get started, simply sign up for an account on our platform. Once registered, you can begin exchanging currencies.</p>
           
           <h2>What currencies can I exchange?</h2>

           <p>X-Spendibles supports a wide range of currencies, including major global currencies and exotic currencies. You can check the list of supported currencies on our website.</p>

           <h2>What is the exchange rate?</h2>
           <p>Exchange rates may vary and are based on current market conditions. You can check the latest exchange rates on our platform before making a transaction.</p>

           <h2>Are there any fees for currency exchange?</h2>
           <p>X-Spendibles charges a small fee for currency exchange. The fee amount will be displayed before you confirm your transaction.</p>

           <h2>How do I reset my password?</h2>

           <p>If you forget your password, you can easily reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions provided to reset your password.</p>

           <h2>What are the terms and conditions?</h2>
           <p>You can review our Terms and Conditions on our website. By using our platform, you agree to abide by these terms and conditions.</p>
       
            </div>
            </div>
            
       
        </>
        
    )
}
export default Faq;