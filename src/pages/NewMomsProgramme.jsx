import React from 'react'

import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import { lasersurgery, newmomsprogramme} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import Banner from '../components/PilesorHaemorrhoids/Banner'
import PilesNeedToKnow from '../components/PilesorHaemorrhoids/PilesNeedToKnow'
import AnalFissureNeedToKnow from '../components/AnalFissure/AnalFissureNeedToKnow'
import LaserSurgeryNeedToKnow from '../components/LaserSurgery/LaserSurgeryNeedToKnow'
import LaserSurgeryWhyAssana from '../components/LaserSurgery/LaserSurgeryWhyAssana'
import AssanaButtCheckNeedToKnow from '../components/AssanaButtCheck/AssanaButtCheckNeedToKnow'
import AssanaButtCheckWhyAssana from '../components/AssanaButtCheck/AssanaButtCheckWhyAssana'
import NewMomsProgrammeNeedToKnow from '../components/NewMomsProgramme/NewMomsProgrammeNeedToKnow'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'

const NewMomsProgramme = () => {
        const [chatBot, setChatBot] = useState(false);

  const [newMomsProgrammePageData, setnewMomsProgrammePageData] = useState([]);
              const [loading, setLoading] = useState(true);
  
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/newMomsPage/dataGet')
            .then((response) => {
                setnewMomsProgrammePageData(response.data.data);
                    setLoading(false);

    
            })
            .catch((error) => {
            console.error("Error:", error);
                    setLoading(false);

            });
    
        },[])

         if (loading || !newMomsProgrammePageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }
  
  return (
    <>
     <Header />
     <Banner pilesorhaemorrhoids={newMomsProgrammePageData}/>
     <NewMomsProgrammeNeedToKnow newMomsProgrammePageData={newMomsProgrammePageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default NewMomsProgramme