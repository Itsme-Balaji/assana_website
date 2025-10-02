import React from 'react'
import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import {colonRectalcancer} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import ColorectalSymptomsNeedToKnown from '../components/ColorectalSymptomsNeedToKnown'
import ColorectalSymptomsWhyAssana from '../components/ColorectalSymptomsWhyAssana'
import NeedToKnow from '../components/ColonRectalCancer/NeedToKnow'
import WhyAssana from '../components/ColonRectalCancer/WhyAssana'
import Category from '../components/ColonRectalCancer/Category'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const ColonRectalCancer = () => {

          const [chatBot, setChatBot] = useState(false);
  
    const [colonRectalCancerPageData, setcolonRectalCancerPageData] = useState([]);
                const [loading, setLoading] = useState(true);
    
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/colonRectalCancerPage/dataGet')
            .then((response) => {
                setcolonRectalCancerPageData(response.data.data);
                    setLoading(false);

    
            })
            .catch((error) => {
            console.error("Error:", error);
                    setLoading(false);

            });
    
        },[])

         if (loading || !colonRectalCancerPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }


  return (
    <>
    <Header />
     <PlevicFloorBanner plevicFloorProblem={colonRectalCancerPageData}/>
     <NeedToKnow colonRectalCancerPageData={colonRectalCancerPageData}/>
     <Category colonRectalCancerPageData={colonRectalCancerPageData} />
     <WhyAssana colonRectalCancerPageData={colonRectalCancerPageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default ColonRectalCancer