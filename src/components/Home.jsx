// ./src/components/Home.js
import React from 'react';
import '../assets/App.css';
import Header from './Header';
// import Footer from './Footer'; // You can re-enable Footer if needed
import background from '../assets/background.mp4';
import GrainOverlay from './GrainOverlay';

const Home = () => {
  return (
    <div className="home">
      <video className='videoTag' autoPlay loop muted>
        <source src={background} type='video/mp4' />
      </video>
      <GrainOverlay />
      <div></div>
      <Header />
      <div className="content">
        <div className="maintenance">
          This webpage is in maintenance
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
