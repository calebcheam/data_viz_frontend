// PlayerCard.js

import React, { useState } from 'react';
import { SmileFilled, MehFilled, FrownFilled } from '@ant-design/icons';

import './Player.css';

const PlayerCard = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getFaceIcon = (rating) => {
    if (rating > 7.3) return <SmileFilled style={{ color: 'green', fontSize: '30px' }} />;
    else if (rating >= 6.5) return <MehFilled style={{ color: 'orange', fontSize: '30px' }} />;
    else return <FrownFilled style={{ color: 'red', fontSize: '30px' }} />;
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`player-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleCardClick}
    >
      <div className= {`card-face front ${player.name === 'Mohamed Salah' || player.name === 'James Maddison' ? 'highest-rated' : ''}`}>
        <img src={player.image_path} alt={player.name} className="player-image"/>
        <h3>{player.name}</h3>
        <p>{player.position_name}</p>
        <p>{getFaceIcon(player.average_rating)}</p>
      </div>
      <div className="card-face back">
      <p>Avg Rating: {player.average_rating}</p>
        {/* <p>Additional Info: {player.additional_info}</p> */}
      </div>
    </div>
  );
};

export default PlayerCard;
