import React from 'react'

import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import {colorectalsymptoms} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import ColorectalSymptomsNeedToKnown from '../components/ColorectalSymptomsNeedToKnown'
import ColorectalSymptomsWhyAssana from '../components/ColorectalSymptomsWhyAssana'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import MenoPauseNeedToKnow from '../components/MenoPause/MenoPauseNeedToKnow'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const Menopause = () => {
        const [chatBot, setChatBot] = useState(false);

  const [banner, setBanner] = useState([]);
  const [problems, setProblems] = useState([]);

  const [loading, setLoading] = useState(true);
  
  
      useEffect(()=>{
          axios.get('https://assana-server.vercel.app/api/menopauseBanner/dataGet')
          .then((response) => {
              setBanner(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });


          axios.get('https://assana-server.vercel.app/api/menopauseProblems/dataGet')
          .then((response) => {
              setProblems(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });


  
      },[])

      console.log("banner",banner);
      

       if (loading || !banner || !problems ) {
    return <Spinner />;  // <-- Show spinner until data loads
  }

  return (
    <>
     <Header />
     <PlevicFloorBanner banner={banner}/>
     <MenoPauseNeedToKnow problems={problems}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default Menopause