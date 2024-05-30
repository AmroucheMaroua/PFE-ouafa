// src/components/Sidebar.js
import React from 'react';
import logo from '../assets/logo.png'; // Your logo path
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-full fixed">
      <div className="p-4">
        <img src={logo} alt="Sonatrack Logo" className="w-20 mx-auto" />
      </div>
      <ul>
        <li className="p-4 hover:bg-secondary cursor-pointer"><Link to="/">Home</Link></li>
        <li className="p-4 hover:bg-secondary cursor-pointer"><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
