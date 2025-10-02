import React, { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import AboutBanner from '../components/AboutBanner'
import WhyAssana from '../components/WhyAssana'
import AboutMission from '../components/AboutMission'
import AboutTeam from '../components/AboutTeam'
import AboutFooter from '../components/AboutFooter'
import { useEffect } from 'react'
import AboutPageWhyAssana from '../components/AboutPageWhyAssana'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner';
import AboutUsAprroach from '../components/AboutUsAprroach'
import ChatBot from '../components/ChatBot'


const AboutUs = () => {
        const [chatBot, setChatBot] = useState(false);

    const [aboutPageData, setAboutPageData] = useState([]);
          const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        axios.get('https://assana-doctorwebsite-backend.vercel.app/api/aboutPage/dataGet')
        .then((response) => {
            setAboutPageData(response.data.data);
            setLoading(false)

        })
        .catch((error) => {
        console.error("Error:", error);
            setLoading(false)

        });

    },[])

      if (loading || !aboutPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }
  return (
    <>
    <Header />
    <AboutBanner aboutPageData={aboutPageData}/>
    <AboutPageWhyAssana aboutPageData={aboutPageData}/>
    <AboutMission aboutPageData={aboutPageData}/>
    <AboutUsAprroach aboutPageData={aboutPageData}/>
    <AboutTeam aboutPageData={aboutPageData}/>
    <Footer />
    <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default AboutUs