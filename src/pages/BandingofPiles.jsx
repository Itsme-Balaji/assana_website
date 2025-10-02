import React from 'react'

import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import { lasersurgery, bandingofpiles} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import Banner from '../components/PilesorHaemorrhoids/Banner'
import PilesNeedToKnow from '../components/PilesorHaemorrhoids/PilesNeedToKnow'
import AnalFissureNeedToKnow from '../components/AnalFissure/AnalFissureNeedToKnow'
import LaserSurgeryNeedToKnow from '../components/LaserSurgery/LaserSurgeryNeedToKnow'
import LaserSurgeryWhyAssana from '../components/LaserSurgery/LaserSurgeryWhyAssana'
import BandingofPilesNeedToKnow from '../components/BandingofPiles/BandingofPilesNeedToKnow'
import BandingofPilesWhyAssana from '../components/BandingofPiles/BandingofPilesWhyAssana'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const BandingofPiles = () => {
        const [chatBot, setChatBot] = useState(false);

  const [bandingofPilesPageData, setBandingofPilesPageData] = useState([]);
              const [loading, setLoading] = useState(true);
  
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/bandingofPilesPage/dataGet')
            .then((response) => {
                setBandingofPilesPageData(response.data.data);
                    setLoading(false);

    
            })
            .catch((error) => {
            console.error("Error:", error);
                    setLoading(false);

            });
    
        },[])

         if (loading || !bandingofPilesPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }


  return (
    <>
     <Header />
     <Banner pilesorhaemorrhoids={bandingofPilesPageData}/>
     <BandingofPilesNeedToKnow bandingofPilesPageData={bandingofPilesPageData}/>
     <BandingofPilesWhyAssana bandingofPilesPageData={bandingofPilesPageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>

  )
}

export default BandingofPiles