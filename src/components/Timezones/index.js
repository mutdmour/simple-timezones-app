import React from "react";

const WORLD_TIME_API_ENDPOINT = "https://worldtimeapi.org/api";

class Timezones extends React.PureComponent {
  constructor(props) {
    super(props); 

    this.state = {
      timezones: []
    };
  }

  getTimezones() {
    const that = this;
    fetch(`${WORLD_TIME_API_ENDPOINT}/timezone/Europe`)
      .then(response => response.json())
      .then(function(timezones) {
        that.setState({
          timezones
        });
      });
  }

  render() {
    const listItems = this.state.timezones.map(item => <li>{item}</li>);
    return (
      <div>
        <button onClick={() => this.getTimezones()}>Get timezones</button>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Timezones;
