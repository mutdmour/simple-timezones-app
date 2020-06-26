import React, { useReducer, useCallback } from "react";
import TimezonesList from '../TimezonesList';

import { getEuropeTimezones } from '../../api/timezones';

import './styles.scss';

const Timezones = () => {
  const [state, dispatch] = useReducer((state, {type, payload}) => {
    switch (type) {
      case 'error':
        return {
          error: true,
          timezones: []
        };
      case 'update':
        return {
          error: false,
          timezones: payload
        };
      default:
        return state;
    }
  }, {
    timezones: [],
    error: false
  });

  const getTimezones = useCallback((e) => {
    e.preventDefault();

    getEuropeTimezones()
      .then((payload) => {
        dispatch({type: 'update', payload})
      })
      .catch(() => {
        dispatch({type: 'error'})
      });
  }, []);

  return (
    <div className="container timezones">
      <div className="row">
        <button onClick={getTimezones}>Get timezones</button>
      </div>
      {state.error ? 
        <div className="row error"><span> Something went wrong </span></div> :
        <TimezonesList timezones={state.timezones}
      />}
    </div>
  );
}

export default Timezones;
