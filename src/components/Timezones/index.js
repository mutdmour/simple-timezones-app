import React, { useReducer, useCallback } from "react";
import { Alert, Button, Container, Row, Col } from "react-bootstrap";

const WORLD_TIME_API_ENDPOINT = "https://worldtimeapi.org/api";

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
    };
  }, {
    timezones: [],
    error: false
  });

  const getTimezones = () => {
    fetch(`${WORLD_TIME_API_ENDPOINT}/timezone/Europe`)
      .then(response => response.json())
      .then((payload) => {
        dispatch({type: 'update', payload})
      })
      .catch(() => {
        dispatch({type: 'error'})
      });
  };

  const {timezones, error} = state;

  const renderContent = useCallback(() => {
    if (error) {
      return <Alert variant="danger"> Something went wrong </Alert>;
    }

    const listItems = timezones.map((item) => <li key={item}>{item}</li>);
    return <ul>{listItems}</ul>;
  }, [timezones, error]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Button variant="primary" onClick={getTimezones}>Get timezones</Button>
        </Col>
      </Row>
      <Row>
        <Col className="content" md="auto" sm="auto" lg="auto" xlg="auto" xs="auto">
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
}

export default Timezones;
