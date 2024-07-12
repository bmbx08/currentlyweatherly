import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import rome from "../images/rome.png";
import hawaii from "../images/hawaii.png";
import london from "../images/london.png";
import beijing from "../images/beijing.png";
import paris from "../images/paris.png";
import tokyo from "../images/tokyo.png";

const SuggestSection = ({cities, selectedCity, handleCityChange}) => {
  console.log("cities?", cities);
  return (
    <Container>
      <Button
        variant={`${selectedCity == null ? "light" : "outline-light"}`}
        className="button-style myloc-button"
        onClick={() => handleCityChange("current")}
      >
        내 위치
      </Button>
      <Row>
        {cities.map((city) => (
          <Col lg={2} md={2} sm={2} xs={3}>
            <Button
              variant={`${
                selectedCity == city.name ? "light" : "outline-light"
              }`}
              onClick={() => handleCityChange(city.name)}
              className="button-style"
            >
              <img src={city.source} />
              <h6>{city.name}</h6>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SuggestSection;
