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
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'

const PilesorHaemorrhoids = () => {
  console.log("pilesorhaemorrhoids",pilesorhaemorrhoids);

        const [chatBot, setChatBot] = useState(false);
          const [banner, setBanner] = useState([]);
          const [problems, setProblems] = useState([]);


               const [loading, setLoading] = useState(true);
   
    
        useEffect(()=>{
          axios.get('https://assana-server.vercel.app/api/pilesorHaemorrhoidsBanner/dataGet')
          .then((response) => {
              setBanner(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });


          axios.get('https://assana-server.vercel.app/api/pilesorHaemorrhoidsProblems/dataGet')
          .then((response) => {
              setProblems(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });
  
      },[])

         if (loading || !banner || !problems) {
    return <Spinner />;  // <-- Show spinner until data loads
  }
  
  return (
    <>
    <Header />
     <Banner banner={banner}/>
     <PilesNeedToKnow problems={problems}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default PilesorHaemorrhoids