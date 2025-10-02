import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { FaPlay } from "react-icons/fa";

const Healing = () => {
    const [play, setPlay] = useState(false);

const [VideoComponentData, setVideoComponentData] = useState([]);
      

          
              useEffect(()=>{
                  axios.get('https://assana-doctorwebsite-backend.vercel.app/api/video/dataGet')
                  .then((response) => {
                      setVideoComponentData(response.data.data);
          
                  })
                  .catch((error) => {
                  console.error("Error:", error);

                  });
          
              },[])

  return (
    <section className='max-w-[1600px] m-auto mb-4 bg-[]'>
      <div className='w-[95%] m-auto'>
        <h1 className="font-[Raleway] smallShadow lg:textShadow text-black  text-3xl sm:text-4xl lg:text-6xl font-semibold lg:mt-30 text-center">{VideoComponentData.Heading}</h1>
        <p className="font-[Raleway] text-base sm:text-xl lg:font-semibold mt-4 text-center">{VideoComponentData.subHeading}</p>

        <div className={play? "w-full  mt-10 aspect-video rounded-[12px] shadow-xl overflow-hidden":"w-full h-130  mt-10 aspect-video rounded-[12px] shadow-xl overflow-hidden"}>
            {!play ? (
              <div
                className="w-full h-full  flex items-center justify-center bg-black cursor-pointer"
                onClick={() => setPlay(true)}
              >
                <FaPlay className="text-5xl lg:text-6xl text-[#ec7979] hover:text-[#1bdd1b]" />
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={VideoComponentData.videoLink}
                title="Medora X Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

        </div>
    </section>
  )
}

export default Healing