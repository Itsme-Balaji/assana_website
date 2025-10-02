import React from 'react'
import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import { afteranalsurgery, bandingofpiles} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import Banner from '../components/PilesorHaemorrhoids/Banner'
import PilesNeedToKnow from '../components/PilesorHaemorrhoids/PilesNeedToKnow'
import AnalFissureNeedToKnow from '../components/AnalFissure/AnalFissureNeedToKnow'
import LaserSurgeryNeedToKnow from '../components/LaserSurgery/LaserSurgeryNeedToKnow'
import LaserSurgeryWhyAssana from '../components/LaserSurgery/LaserSurgeryWhyAssana'
import BandingofPilesNeedToKnow from '../components/BandingofPiles/BandingofPilesNeedToKnow'
import BandingofPilesWhyAssana from '../components/BandingofPiles/BandingofPilesWhyAssana'
import AfterAnalSurgeryNeedToKnow from '../components/AfterAnalSurgery/AfterAnalSurgeryNeedToKnow'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const AfterAnalSurgery = () => {
        const [chatBot, setChatBot] = useState(false);

  const [afterAnalSurgeryPageData, setAfterAnalSurgeryPageData] = useState([]);
            const [loading, setLoading] = useState(true);
  
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/afterAnalSurgeryPage/dataGet')
            .then((response) => {
                setAfterAnalSurgeryPageData(response.data.data);
            setLoading(false)

    
            })
            .catch((error) => {
            console.error("Error:", error);
            setLoading(false)

            });
    
        },[])
            if (loading || !afterAnalSurgeryPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }
  return (
    <>
     <Header />
     <Banner pilesorhaemorrhoids={afterAnalSurgeryPageData}/>
     <AfterAnalSurgeryNeedToKnow afterAnalSurgeryPageData={afterAnalSurgeryPageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default AfterAnalSurgery