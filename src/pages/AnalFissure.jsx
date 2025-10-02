import React from 'react'
import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import { analfissure} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import Banner from '../components/PilesorHaemorrhoids/Banner'
import PilesNeedToKnow from '../components/PilesorHaemorrhoids/PilesNeedToKnow'
import AnalFissureNeedToKnow from '../components/AnalFissure/AnalFissureNeedToKnow'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const AnalFissure = () => {
        const [chatBot, setChatBot] = useState(false);

  const [analFissurePageData, setAnalFissurePageData] = useState([]);
              const [loading, setLoading] = useState(true);
  
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/analFissurePage/dataGet')
            .then((response) => {
                setAnalFissurePageData(response.data.data);
                    setLoading(false);

    
            })
            .catch((error) => {
            console.error("Error:", error);
                    setLoading(false);

            });
    
        },[])

         if (loading || !analFissurePageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }


  return (
    <>
    <Header />
     <Banner pilesorhaemorrhoids={analFissurePageData}/>
     <AnalFissureNeedToKnow analFissurePageData={analFissurePageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default AnalFissure