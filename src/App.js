import React from 'react';
import './App.css';
import SimpleLineChart from './Components/LineChart/SimpleLineChart';
import SimpleBarChart from './Components/BarChart/SimpleBarChart';


function App() {

  return (
    <div className="App">
      <h1>React Recharts Examples</h1>
      <div className="chart1">
        <SimpleLineChart />

      </div>
      <div className="chart2">
        <SimpleBarChart />
      </div>
    </div>
  );
}

export default App;
