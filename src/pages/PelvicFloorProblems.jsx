import React from 'react'
import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import PlevicFloorHelp from '../components/PlevicFloorHelp'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import {plevicFloorProblem} from '../assets/data'
import FrequentlyQA from '../components/FrequentlyQA'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'

const PelvicFloorProblems = () => {
        const [chatBot, setChatBot] = useState(false);

  const [pelvicFloorProblemsPageData, setpelvicFloorProblemsPageData] = useState([]);
              const [loading, setLoading] = useState(true);
  
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/pelvicFloorPage/dataGet')
            .then((response) => {
                setpelvicFloorProblemsPageData(response.data.data);
                    setLoading(false);

    
            })
            .catch((error) => {
            console.error("Error:", error);
                    setLoading(false);

            });
    
        },[])

         if (loading || !pelvicFloorProblemsPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }
  return (
    <>
     <Header />
     <PlevicFloorBanner plevicFloorProblem={pelvicFloorProblemsPageData}/>
     <PlevicFloorHelp pelvicFloorProblemsPageData={pelvicFloorProblemsPageData} />
     <WhyAssanaPelvicFloor pelvicFloorProblemsPageData={pelvicFloorProblemsPageData}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default PelvicFloorProblems