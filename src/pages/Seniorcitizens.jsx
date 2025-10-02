import React from 'react'

import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import {pilesorhaemorrhoids, plevicFloorProblem} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import Banner from '../components/PilesorHaemorrhoids/Banner'
import PilesNeedToKnow from '../components/PilesorHaemorrhoids/PilesNeedToKnow'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import SeniorcitizensNeddToKnow from '../components/Seniorcitizens/SeniorcitizensNeddToKnow'
import SeniorcitizensWhyAssana from '../components/Seniorcitizens/SeniorcitizensWhyAssana'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const Seniorcitizens = () => {
        const [chatBot, setChatBot] = useState(false);

    const [seniorcitizensPageData, setPilesorHaemorrhoids] = useState([]);
                const [loading, setLoading] = useState(true);
    
        
            useEffect(()=>{
                axios.get('https://assana-doctorwebsite-backend.vercel.app/api/seniorcitizensPage/dataGet')
                .then((response) => {
                    setPilesorHaemorrhoids(response.data.data);
                    setLoading(false);
        
                })
                .catch((error) => {
                console.error("Error:", error);
                    setLoading(false);

                });
        
            },[])

             if (loading || !seniorcitizensPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }

  return (
     <>
    <Header />
     <PlevicFloorBanner plevicFloorProblem={seniorcitizensPageData}/>
    <SeniorcitizensNeddToKnow seniorcitizensPageData={seniorcitizensPageData} />
    <SeniorcitizensWhyAssana seniorcitizensPageData={seniorcitizensPageData}/>.
    
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default Seniorcitizens