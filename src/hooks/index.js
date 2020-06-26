import { useState } from 'react';

const useFetchHandler = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleFetch = (fetchPromise) => {
    fetchPromise
      .then((data) => {
        setError(false);
        setData(data);
      }, 
      () => {
        setError(true);
        setData(null);
      }
    )
  };
  
  return {
    error,
    data,
    handleFetch
  };
};
export {
  useFetchHandler
};