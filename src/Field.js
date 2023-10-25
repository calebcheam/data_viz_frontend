// Field.js
import React from 'react';
import Team from './Team';

const Field = ({ team1, team2 }) => {
  return (
    <div className="field">
      <Team teamName={team1.name} players={team1.players} isLeftSide={true} />
      <Team teamName={team2.name} players={team2.players} isLeftSide={false} />
  </div>
  );
};

export default Field;
