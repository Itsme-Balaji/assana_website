import React from 'react'
import Header from '../components/Header'
import PlevicFloorBanner from '../components/PlevicFloorBanner'
import PlevicFloorHelp from '../components/PlevicFloorHelp'
import WhyAssanaPelvicFloor from '../components/WhyAssanaPelvicFloor'
import PlevicAssanaTreat from '../components/PlevicAssanaTreat'
import PlevicBooking from '../components/PlevicBooking'
import Footer from '../components/Footer'
import FrequentlyQA from '../components/FrequentlyQA'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import GutWellnwssNeedToKnow from '../components/GutWellnwssPage/GutWellnwssNeedToKnow'
import Spinner from '../components/Spinner';
import ChatBot from '../components/ChatBot'


const GutWellnwssPage = () => {
        const [chatBot, setChatBot] = useState(false);

   const [banner, setBanner] = useState([]);
  const [problems, setProblems] = useState([]);

  const [loading, setLoading] = useState(true);
  
  
      useEffect(()=>{
          axios.get('https://assana-server.vercel.app/api/gutWellnessBanner/dataGet')
          .then((response) => {
              setBanner(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });


          axios.get('https://assana-server.vercel.app/api/gutWellnessProblems/dataGet')
          .then((response) => {
              setProblems(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });
  
      },[])

      console.log("banner",banner);
      

       if (loading || !banner || !problems ) {
    return <Spinner />;  // <-- Show spinner until data loads
  }


  return (
    <>
     <Header />
     <PlevicFloorBanner banner={banner}/>
     <GutWellnwssNeedToKnow problems={problems} />
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default GutWellnwssPage