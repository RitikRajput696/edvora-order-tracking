import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 200, pv: 1000, amt: 1200 },
];

function BarChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/products')
      .then((response) => response.json())
      .then((json) => setChartData(json));
  }, []);
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default BarChart;
