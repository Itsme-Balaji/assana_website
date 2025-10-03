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

  const [banner, setBanner] = useState([]);
  const [problems, setProblems] = useState([]);
  const [whyAssana, setWhyAssana] = useState([]);

  const [loading, setLoading] = useState(true);
  
  
      useEffect(()=>{
          axios.get('https://assana-server.vercel.app/api/pelvicFloorBanner/dataGet')
          .then((response) => {
              setBanner(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });


          axios.get('https://assana-server.vercel.app/api/pelvicFloorProblems/dataGet')
          .then((response) => {
              setProblems(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });

          axios.get('https://assana-server.vercel.app/api/pelvicFloorWhyAssana/dataGet')
          .then((response) => {
              setWhyAssana(response.data.data);
                    setLoading(false);

  
          })
          .catch((error) => {
          console.error("Error:", error);
                    setLoading(false);

          });
  
      },[])

      console.log("banner",banner);
      

       if (loading || !banner || !problems || !whyAssana ) {
    return <Spinner />;  // <-- Show spinner until data loads
  }

  return (
    <>
     <Header />
     <PlevicFloorBanner banner={banner}/>
     <PlevicFloorHelp problems={problems} />
     <WhyAssanaPelvicFloor whyAssana={whyAssana}/>
     <PlevicAssanaTreat />
     <FrequentlyQA />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default PelvicFloorProblems