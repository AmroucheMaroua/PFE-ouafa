// src/components/Dashboard.js
import React from 'react';
import { PieChart , Pie , LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Indicators Section */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
            <h2 className="text-xl font-bold text-center">Indicator 1</h2>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
            <h2 className="text-xl font-bold text-center">Indicator 2</h2>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
            <h2 className="text-xl font-bold text-center">Indicator 3</h2>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Line Chart Example</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="uv" stroke="#FF5722" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Bar Chart Example</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#FF5722" />
            </BarChart>
          </ResponsiveContainer>
        </div>


        {/* Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Pie Chart Example</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        
      </div>
      
    </div>
  );
};

export default Dashboard;
