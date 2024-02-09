import React from 'react';
import './Radio.css';

const Radio = () => {
  return (
    <div className="radio-container">
      <audio controls>
        {/* Replace with your actual radio stream URL */}
        <img src='./images/free-palestine.jpg'></img>
        <source src="https://scdn.nrjaudio.fm/adwz2/fr/30001/mp3_128.mp3?origine=fluxradios" type="audio/mp3" />

        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default Radio;