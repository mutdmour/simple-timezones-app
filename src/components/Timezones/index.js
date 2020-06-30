import React, { useCallback } from "react";
import TimezonesList from '../TimezonesList';
import { useFetchHandler } from '../../hooks';

import { getEuropeTimezones } from '../../api/timezones';

import './styles.scss';

const Timezones = () => {
  const {
    error,
    data: timezones,
    handleFetch
  } = useFetchHandler();

  const getTimezones = useCallback(() => {
    handleFetch(getEuropeTimezones());
  }, [handleFetch]);

  return (
    <div className="container timezones">
      <div className="row">
        <button onClick={getTimezones}>Get timezones</button>
      </div>
      {error ? 
        <div className="row error"><span> Something went wrong </span></div> :
        <TimezonesList timezones={timezones}/>
      }
    </div>
  );
}

export default Timezones;
