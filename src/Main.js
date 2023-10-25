import React from 'react';
import './App.css';
import Field from './Field';
import playersData from './playerData';
import { useState } from 'react';
import ComparisonChart from './ComparisonChart';


function Main() {
  // Separate players into two teams based on team_id
  const spurs = playersData.filter(player => player.team_id === 6);
  const liverpool = playersData.filter(player => player.team_id === 8);

  const [showChart, setShowChart] = useState(false);

    const toggleChart = () => {
        setShowChart(prevState => !prevState);
    };

    const buttonStyle = {
        padding: '10px 20px',
        background: '#007BFF',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        marginTop: '20px'
    };

  console.log(spurs)

  const team1 = {
    name: 'TottenHam Hotspur',
    players: spurs,
  };

  const team2 = {
    name: 'Liverpool',
    players: liverpool,
  };

  return (
    <div className="App">
      <h1>Home vs Away</h1>
      <Field team1={team1} team2={team2} />
      <button style={buttonStyle} onClick={toggleChart}>
                Toggle Comparison Chart
            </button>

            {showChart && (
                <div className="chart">
                    <ComparisonChart teams={[team1, team2]} />
                </div>
            )}
    </div>
  );

}

export default Main