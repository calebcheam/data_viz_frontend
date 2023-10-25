// Team.js
import React from 'react';
import PlayerCard from './Player';

const Team = ({ teamName, players, isLeftSide }) => {
  const forwards = players.filter(player => player.broad_position === 'Attacker');
  const midfielders = players.filter(player => player.broad_position === 'Midfielder');
  const defenders = players.filter(player => player.broad_position === 'Defender');
  const goalkeeper = players.filter(player => player.broad_position === 'Goalkeeper');



  return (
    <div className={`team ${isLeftSide ? 'team-left' : 'team-right'}`}>
      <h2>{teamName}</h2>
      <div className="formation">
        <div className="forwards">
          {forwards.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
        <div className="midfielders">
          {midfielders.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
        <div className="defenders">
          {defenders.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
        <div className="goalkeeper">
          {goalkeeper.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
