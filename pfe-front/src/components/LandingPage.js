// src/components/LandingPage.js
import React, { useState } from 'react';
import FileUploadPopup from './FileUploadPopup';
import landingPhoto from '../assets/landing-photo.avif'; // Add your landing photo to src/assets
import logo from '../assets/logo.png'; // Add your logo image to src/assets

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className=" flex-1 flex flex-col bg-gray-900 text-white">
        {/* Hero Section */}
        <header className="flex flex-col md:flex-row items-center justify-between bg-gray-800 py-12 px-6 md:px-12 flex-grow">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Crafting a Brand to its Finest</h1>
            <p className="mb-6">A creative agency for crafting your brand and other design services. We can handle it.</p>
            <button 
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              onClick={() => setShowPopup(true)}
            >
              Upload File
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={landingPhoto} alt="Sonatrack" className="w-full h-80 object-cover rounded-lg" />
          </div>
        </header>



        {/* Footer Section */}
        <footer className="bg-gray-800 py-4 text-center">
          <p>&copy; 2023 Sonatrack. All rights reserved.</p>
        </footer>
      </div>

      {showPopup && <FileUploadPopup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default LandingPage;
