import React from 'react'
import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import {colonRectalcancer} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import ColorectalSymptomsNeedToKnown from '../components/ColorectalSymptomsNeedToKnown'
import ColorectalSymptomsWhyAssana from '../components/ColorectalSymptomsWhyAssana'
import NeedToKnow from '../components/ColonRectalCancer/NeedToKnow'
import WhyAssana from '../components/ColonRectalCancer/WhyAssana'
import Category from '../components/ColonRectalCancer/Category'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const ColonRectalCancer = () => {

          const [chatBot, setChatBot] = useState(false);
  
    const [banner, setBanner] = useState([]);
  const [problems, setProblems] = useState([]);
  const [whyAssana, setWhyAssana] = useState([]);

  const [loading, setLoading] = useState(true);
  
  
      useEffect(()=>{
          axios.get('https://assana-server.vercel.app/api/colonRectalCancerBanner/dataGet')
          .then((response) => {
              setBanner(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });


          axios.get('https://assana-server.vercel.app/api/colonRectalCancerProblems/dataGet')
          .then((response) => {
              setProblems(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });

          axios.get('https://assana-server.vercel.app/api/colonRectalCancerWhyAssana/dataGet')
          .then((response) => {
              setWhyAssana(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });
  
      },[])

      console.log("banner",banner);
      

       if (loading || !banner || !problems || !whyAssana ) {
    return <Spinner />;  // <-- Show spinner until data loads
  }


  return (
    <>
    <Header />
     <PlevicFloorBanner banner={banner}/>
     <NeedToKnow problems={problems}/>
     <Category problems={problems} />
     <WhyAssana whyAssana={whyAssana}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default ColonRectalCancer