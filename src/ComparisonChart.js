import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';

const calculateAverageRating = (players) => {
  const totalRating = players.reduce((acc, player) => acc + player.average_rating, 0);
  return players.length ? +((totalRating / players.length).toFixed(1)) : 0;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p>{`${label} Ratings:`}</p>
        {payload.map((item, index) => (
          <p key={index} style={{ color: item.color }}>
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ComparisonChart = ({ teams }) => {
  const categories = ['Attack', 'Midfield', 'Defense'];
  const data = categories.map(category => {
    const categoryData = {
      name: category,
    };

    teams.forEach(team => {
      let players;
      if (category === 'Attack') {
        players = team.players.filter(player => player.broad_position === 'Attacker');
      } else if (category === 'Midfield') {
        players = team.players.filter(player => player.broad_position === 'Midfielder');
      } else {
        players = team.players.filter(player => player.broad_position === 'Defender' || player.broad_position === 'Goalkeeper');
      }

      categoryData[team.name] = calculateAverageRating(players);
    });

    return categoryData;
  });

  const colors = ['#8884d8', '#82ca9d'];

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      {teams.map((team, index) => (
        <Bar key={team.name} dataKey={team.name} fill={colors[index]} barSize={20}>
          <LabelList dataKey={team.name} position="top" />
        </Bar>
      ))}
    </BarChart>
  );
};

export default ComparisonChart;
