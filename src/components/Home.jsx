// ./src/components/Home.js
import React, { useState, useEffect } from 'react';
import '../assets/App.css';
import Header from './Header';
import background from '../assets/background.mp4';
import GrainOverlay from './GrainOverlay';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.onloadeddata = () => {
        setLoading(false);
      };
    }
  }, []);

  return (
    <div className={`home ${loading ? 'loading' : 'loaded'}`}>
      {loading}
      <video className='videoTag' autoPlay loop muted playsinline>
        <source src={background} type='video/mp4' />
      </video>
      {!loading && (
        <>
          <GrainOverlay />
          <Header />
          <div className="content">
            <div className="maintenance">
              This webpage is in maintenance
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
