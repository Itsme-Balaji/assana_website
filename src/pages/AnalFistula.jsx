import React from 'react'

import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import {colorectalsymptoms,analfistula} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import ColorectalSymptomsNeedToKnown from '../components/ColorectalSymptomsNeedToKnown'
import ColorectalSymptomsWhyAssana from '../components/ColorectalSymptomsWhyAssana'
import AnalFistulaNeedToKnow from '../components/AnalFistula/AnalFistulaNeedToKnow'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const AnalFistula = () => {
        const [chatBot, setChatBot] = useState(false);

   const [analFistulaPageData, setAnalFistulaPageData] = useState([]);
               const [loading, setLoading] = useState(true);
   
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/analFistulaPage/dataGet')
            .then((response) => {
                setAnalFistulaPageData(response.data.data);
                    setLoading(false);

    
            })
            .catch((error) => {
            console.error("Error:", error);
                    setLoading(false);

            });
    
        },[])

         if (loading || !analFistulaPageData) {
            return <Spinner />;  // <-- Show spinner until data loads
          }

  return (
    <>
     <Header />
     <PlevicFloorBanner plevicFloorProblem={analFistulaPageData}/>
     <AnalFistulaNeedToKnow analFistulaPageData={analFistulaPageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default AnalFistula