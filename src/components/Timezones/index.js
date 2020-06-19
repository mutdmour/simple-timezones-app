import React from "react";
import { Alert, Button, Container, Row, Col } from "react-bootstrap";

const WORLD_TIME_API_ENDPOINT = "https://worldtimeapi.org/api";

class Timezones extends React.PureComponent {
  constructor(props) {
    super(props); 

    this.state = {
      timezones: [],
      error: false 
    };
  }

  getTimezones() {
    const that = this;
    fetch(`${WORLD_TIME_API_ENDPOINT}/timezone/Europe`)
      .then(response => response.json())
      .then((timezones) => {
        timezones && that.setState({
          timezones,
          error: false
        });
      })
      .catch((e) => {
        e && this.setState({
          error: true,
          timezones: []
        })
      });
  }

  render() {
    const listItems = this.state.timezones.map((item, i) => <li key={i}>{item}</li>);
    return (
      <Container fluid>
        {this.state.error && <Row>
          <Col>
            <Alert variant="danger"> Something went wrong </Alert>
          </Col>
        </Row>}
        <Row>
          <Col>
            <Button variant="primary" onClick={() => this.getTimezones()}>Get timezones</Button>
          </Col>
        </Row>
        <Row>
          <ul>{listItems}</ul>
        </Row>
      </Container>
    );
  }
}

export default Timezones;
