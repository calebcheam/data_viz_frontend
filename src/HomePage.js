import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './HomePage.css';
import { Link } from 'react-router-dom';


const BouncingBall = () => {
  return (
    <div className="bouncing-ball"></div>
  );
};

const TypingComponent = () => {
  return (
    <div style={{ fontSize: '1.5em' }}>
      <span>This app is built by a collaborative team of:</span>
      <br />
      <TypeAnimation
        sequence={[
          'Data Scientists',
          1000,
          'Software Engineers',
          1000,
          'Quant Researchers',
          1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to QuantSport</h1>
      <TypingComponent />
      <div className="card">
                Empower your match analysis with our data visualization tool, delivering clear, concise, and insightful state-of-the-art visualisations of team and player statistics with informed analysis.
            </div>
      <div className="animation-container">
        <BouncingBall />
      </div>
      <Link to="/main">
        <button className="demo-button">Liverpool Demo</button>
      </Link>
    </div>
  );
};

export default HomePage;