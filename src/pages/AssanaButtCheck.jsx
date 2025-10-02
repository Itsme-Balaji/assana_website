import React from 'react'


import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import { lasersurgery, assanabuttcheck} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import Banner from '../components/PilesorHaemorrhoids/Banner'
import PilesNeedToKnow from '../components/PilesorHaemorrhoids/PilesNeedToKnow'
import AnalFissureNeedToKnow from '../components/AnalFissure/AnalFissureNeedToKnow'
import LaserSurgeryNeedToKnow from '../components/LaserSurgery/LaserSurgeryNeedToKnow'
import LaserSurgeryWhyAssana from '../components/LaserSurgery/LaserSurgeryWhyAssana'
import AssanaButtCheckNeedToKnow from '../components/AssanaButtCheck/AssanaButtCheckNeedToKnow'
import AssanaButtCheckWhyAssana from '../components/AssanaButtCheck/AssanaButtCheckWhyAssana'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const AssanaButtCheck = () => {

        const [chatBot, setChatBot] = useState(false);

  const [assanaButtCheckPageData, setassanaButtCheckPageData] = useState([]);
              const [loading, setLoading] = useState(true);
  
        
            useEffect(()=>{
                axios.get('https://assana-doctorwebsite-backend.vercel.app/api/assanaButtPage/dataGet')
                .then((response) => {
                    setassanaButtCheckPageData(response.data.data);
                    setLoading(false);

        
                })
                .catch((error) => {
                console.error("Error:", error);
                    setLoading(false);

                });
        
            },[])

             if (loading || !assanaButtCheckPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }

  return (
    <>
     <Header />
     <Banner pilesorhaemorrhoids={assanaButtCheckPageData}/>
     <AssanaButtCheckNeedToKnow assanaButtCheckPageData={assanaButtCheckPageData}/>
     <AssanaButtCheckWhyAssana assanaButtCheckPageData={assanaButtCheckPageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default AssanaButtCheck