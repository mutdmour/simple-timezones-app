const WORLD_TIME_DOMAIN = process.env.REACT_APP_WORLD_TIME_DOMAIN;

const getEuropeTimezones = () => {
  return fetch(`${WORLD_TIME_DOMAIN}/api/timezone/Europe`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }

      return data;
    });
};

export {
  getEuropeTimezones
};
