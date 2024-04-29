import React from 'react';
import { PuffLoader } from 'react-spinners';

const LoaderAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
      <div className="absolute inset-0 flex justify-center items-center">
        <PuffLoader color="#ffffff" size={100} />
      </div>
    </div>
  );
};

export default LoaderAnimation;
