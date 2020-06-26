import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TimezonesList = ({timezones}) => {
  if (!timezones || timezones.length === 0) {
    return null;
  }

  const listItems = timezones.map((item) => <li key={item}>{item}</li>);

  return <div className="timezones-list row">
    <ul>{listItems}</ul>
  </div>;
};

TimezonesList.propTypes = {
  timezones: PropTypes.arrayOf(PropTypes.string)
};

TimezonesList.defaultProps = {
  timezones: []
};

export default React.memo(TimezonesList);