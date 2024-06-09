import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css';
import Header from './Header';
import background from '../assets/imgs/background.mp4';
import GrainOverlay from './GrainOverlay';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.onloadeddata = () => {
        setLoading(false);
      };

      // Attempt to autoplay the video
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay failed, requiring user interaction:', error);

          // Add a user interaction fallback
          const handleUserInteraction = () => {
            videoElement.play();
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          };

          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        });
      }
    }
  }, []);

  return (
    <div className={`home ${loading ? 'loading' : 'loaded'}`}>
      <video className='videoTag' autoPlay loop muted playsInline>
        <source src={background} type='video/mp4' />
      </video>
      {!loading && (
        <>
          <Header />
          <GrainOverlay />
          <div className="content">
            <div className="maintenance">
              <p><b>Title about something</b></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
