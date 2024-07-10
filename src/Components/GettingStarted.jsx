import React from 'react';
import gettingstarted from '../Components/images/LOGO.png';
import { useNavigate } from 'react-router-dom';

function GettingStarted() {
  const navigate = useNavigate();

  const goToTemplate = () => {
    navigate('/Templete');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow p-8 max-w-md w-full mx-auto">
        <p className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create a professional resume with
        </p>
        <div className="w-40 mx-auto mb-8">
          <img src={gettingstarted} alt="Getting Started" />
        </div>

        <hr className="my-6" />

        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">
          Welcome to Resume Builder
        </h1>
        <p className="text-lg text-center mb-8 text-gray-700">
          Craft a professional resume in just minutes
        </p>

        <div className="flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-colors duration-300 text-2xl"
            onClick={goToTemplate}
          >
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
