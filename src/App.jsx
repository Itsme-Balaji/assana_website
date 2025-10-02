import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PelvicFloorProblems from './pages/PelvicFloorProblems';
import ColorectalSymptoms from './pages/ColorectalSymptoms';
import ColonRectalCancer from './pages/ColonRectalCancer';
import PilesorHaemorrhoids from './pages/PilesorHaemorrhoids';
import AnalFissure from './pages/AnalFissure';   
import LaserSurgery from './pages/LaserSurgery';   
import BandingofPiles from './pages/BandingofPiles';
import AfterAnalSurgery from './pages/AfterAnalSurgery';
import AnalFistula from './pages/AnalFistula';    
import GutBrainAxis from './pages/GutBrainAxis';   
import GutCleanseProgram from './pages/GutCleanseProgram';   
import AssanaButtCheck from './pages/AssanaButtCheck';   
import NewMomsProgramme from './pages/NewMomsProgramme';
import Menopause from './pages/Menopause';
import Seniorcitizens from './pages/Seniorcitizens';
import GutWellnwssPage from './pages/GutWellnwssPage';
import BookNow from './pages/BookNow';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/pelvicfloorproblems" element={<PelvicFloorProblems />} />
        <Route path="/colorectalsymptoms" element={<ColorectalSymptoms />} />
        <Route path="/colonRectalcancer" element={<ColonRectalCancer />} />
        <Route path="/pilesorhaemorrhoids" element={<PilesorHaemorrhoids />} />
        <Route path="/analfissure" element={<AnalFissure />} />
        <Route path="/lasersurgery" element={<LaserSurgery />} />
        <Route path="/bandingofpiles" element={<BandingofPiles />} />
        <Route path="/afteranalaurgery" element={<AfterAnalSurgery />} />
        <Route path="/analfistula" element={<AnalFistula />} />
        <Route path="/gutbrainaxis" element={<GutBrainAxis />} />
        <Route path="/gutcleanseprogram" element={<GutCleanseProgram />} />
        <Route path="/assanabuttcheck" element={<AssanaButtCheck />} />
        <Route path="/newmomsprogramme" element={<NewMomsProgramme />} />
        <Route path="/menopause" element={<Menopause />} />
        <Route path="/seniorcitizens" element={<Seniorcitizens />} />
        <Route path="/gutWellnwssPage" element={<GutWellnwssPage />} />
        <Route path="/bookNow" element={<BookNow />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
