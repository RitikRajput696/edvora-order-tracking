import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  Tooltip,
  LabelList,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';

function BarChart1() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/products')
      .then((response) => response.json())
      .then((json) => setChartData(json));
  }, []);
  return (
    <div>
      <BarChart
        width={1280}
        height={600}
        data={chartData}
        margin={{ top: 20 }}
        padding={{ bottom: 10 }}
      >
        <XAxis dataKey="name" stroke="#8884d8" tickCount={50}>
          <Label value="Products Name" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="Stock Left" angle={-90} position="insideLeft" />
        </YAxis>

        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="stock" fill="#00c9c8" barSize={30}>
          <LabelList dataKey="stock" fill="#00c9c8" position="top" />
        </Bar>
      </BarChart>
    </div>
  );
}

export default BarChart1;
