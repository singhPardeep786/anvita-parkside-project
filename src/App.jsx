import React from 'react';
import '/public/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import '/public/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Banner from './components/Banner';
import UniqueFeatures from './components/UniqueFeatures';
import Intro from './components/Intro';
import Overview from './components/Overview';
import AllPlans from './components/AllPlans';
import Amenities from './components/Amenities';
import Clubhouse from './components/Clubhouse';
import Location from './components/Location';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <UniqueFeatures />
      <Intro />
      <Overview />
      <AllPlans />
      <Amenities />
      <Clubhouse />
      <Location />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  )
}

export default App