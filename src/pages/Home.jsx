import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import WhyAssana from '../components/WhyAssana'
import Services from '../components/Services'
import Healing from '../components/Healing'
import PatientSays from '../components/PatientSays'
import FrequentlyQA from '../components/FrequentlyQA'
import TryDemo from '../components/TryDemo'
import Footer from '../components/Footer'
import LandingPage from './LandingPage'
import { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import ChatBot from '../components/ChatBot'

const Home = () => {
        const [chatBot, setChatBot] = useState(false);
    
      const [whyAssanaComponentData, setWhyAssanaComponentData] = useState([]);
                  const [loading, setLoading] = useState(true);
      

          
              useEffect(()=>{
                  axios.get('https://assana-doctorwebsite-backend.vercel.app/api/homewhyassanaPage/dataGet')
                  .then((response) => {
                      setWhyAssanaComponentData(response.data.data);
                      setLoading(false)
          
                  })
                  .catch((error) => {
                  console.error("Error:", error);
                      setLoading(false)

                  });
          
              },[])

                         if (loading || !whyAssanaComponentData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }
  
  return (
    <>
        
        <Header />
        <Banner />
        <WhyAssana whyAssanaComponentData={whyAssanaComponentData}/>
        <Services chatBot={chatBot} setChatBot={setChatBot}/>
        <Healing />
        <PatientSays />
        <FrequentlyQA />
        <TryDemo chatBot={chatBot} setChatBot={setChatBot}/>
        <Footer />
        <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default Home