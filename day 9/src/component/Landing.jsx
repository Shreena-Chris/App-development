import React, { useEffect, useRef } from 'react';
import '../assests/css/Landing.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userslice';
import Lottie from 'lottie-web';
import animationland from '../assests/css/lotties/FAQ.json'
import MarketInsightsTable from './Market';
 import { Link as ScrollLink, Element } from 'react-scroll';
import Newnew from './NewHeaderFooter';


const Land = () => {
  const user = useSelector(selectUser);
  const contactDetailsRef = useRef(null);
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

  const handleContactClick = () => {
    if (contactDetailsRef.current) {
      contactDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="landing-page">
        <Newnew/>
        <div>
          <div className='animation-containerland'>
            <div ref={contain} className='animconf'></div>
          </div>
        </div>

        <Element name="home">
          <div className="paragraph-section">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to CURRENSYNC, your trustworthy companion in the realm of currency. In a world where financial markets are increasingly interconnected, understanding currency dynamics is essential. Whether you're an experienced trader, a curious investor, or someone simply looking to convert currencies for your upcoming international trip, we are here to empower you. Our platform offers a wide range of features to cater to your needs.For those seeking real-time currency insights, our up-to-the-minute data and analysis provide you with a competitive edge. We understand the importance of timing in currency trading, and our platform ensures that you have access to the latest trends, news, and forecasts.Our user-friendly conversion tools make it a breeze to convert one currency to another. Whether you're converting dollars to euros or yen to pounds, our intuitive interface ensures that you get accurate and instant results. Say goodbye to the hassle of manual calculations.Exploring currency pairings? Look no further. We offer comprehensive information on currency pairs, helping you understand their dynamics and historical performance. Whether you're interested in major pairs like EUR/USD or exotic pairs, our platform provides valuable insights.But we're not just about numbers and charts. At CURRENSYNC, we believe in making currency knowledge accessible. Our educational resources, including articles, guides, and tutorials, are designed to demystify the complexities of currency markets. Whether you're a beginner or an expert, there's always something new to learn.We also understand that currency matters can be perplexing, and you may have questions or concerns. That's why our dedicated support team is ready to assist you. Feel free to reach out with any inquiries, and we'll provide you with the guidance you need.In essence, CURRENSYNC is your all-in-one destination for everything related to currency. We're on a mission to make currency information transparent, reliable, and user-friendly. Join us on this journey as we strive to simplify the world of currencies, ensuring that understanding currency is not only easy but also accessible to everyone. Your financial decisions deserve to be well-informed, and CURRENSYNC is here to make that a reality. Welcome to a world where currency becomes clear, accessible, and, most importantly, your ally in the world of finance.</p>
          </div>
        </Element>

        <Element name="insights">
          <MarketInsightsTable isVisible={true} />
        </Element>
        
        
        
      </div>
    </>
  );
};

export default Land;