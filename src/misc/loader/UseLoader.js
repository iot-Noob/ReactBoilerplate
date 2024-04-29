import React, { useState, useEffect } from 'react';
import LoaderAnimation from './LoaderAnimation';

const UseLoader = ({ isload = false }) => {
  const [loaderTrue, setLoaderTrue] = useState(false);

  useEffect(() => {
    // Update the loader state based on the 'isload' prop
    setLoaderTrue(isload);
  }, [isload]);

  return (
    <>
      {loaderTrue && <LoaderAnimation />}
    </>
  );
};

export default UseLoader;
