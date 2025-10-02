import React from 'react'

import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import FrequentlyQA from '../components/FrequentlyQA'
import ColorectalSymptomsNeedToKnown from '../components/ColorectalSymptomsNeedToKnown'
import ColorectalSymptomsWhyAssana from '../components/ColorectalSymptomsWhyAssana'
import GutBrainAxisNeddToKnow from '../components/GutBrainAxis/GutBrainAxisNeddToKnow'
import Services from '../components/GutBrainAxis/Services'
import GutCleanseProgramNeedToKnow from '../components/GutCleanseProgram/GutCleanseProgramNeedToKnow'
import WhyAssana from '../components/GutCleanseProgram/WhyAssana'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const GutCleanseProgram = () => {

        const [chatBot, setChatBot] = useState(false);

  const [colonHydrotherapyPageData, setcolonHydrotherapyPageData] = useState([]);
              const [loading, setLoading] = useState(true);
  
      
          useEffect(()=>{
              axios.get('https://assana-doctorwebsite-backend.vercel.app/api/colonHydrotherapyPage/dataGet')
              .then((response) => {
                  setcolonHydrotherapyPageData(response.data.data);
                    setLoading(false);

      
              })
              .catch((error) => {
              console.error("Error:", error);
                    setLoading(false);

              });
      
          },[])

           if (loading || !colonHydrotherapyPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }

  return (
    <>
     <Header />
     <PlevicFloorBanner plevicFloorProblem={colonHydrotherapyPageData}/>
     <GutCleanseProgramNeedToKnow colonHydrotherapyPageData={colonHydrotherapyPageData}/>
     <WhyAssana colonHydrotherapyPageData={colonHydrotherapyPageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default GutCleanseProgram