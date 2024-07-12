import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import thermometer from "../images/thermometer.png"
import wind1 from "../images/wind1.png"
import wind2 from "../images/wind2.png"


const WeatherSection = ({weather, roundNumber, selectedCity}) => {
    console.log(weather);
    return (
    <Container>
      <Row className="weather-section">
        <Col className="column" sm={12} md={6} lg={4}>
            <div className="temp-box col">
            <img src={thermometer}/>
            <div>
                <h4>{weather?.main.temp}°C</h4>
                <h4>{weather && roundNumber(weather.main.temp*1.8+32)}°F</h4>
            </div>
            </div>
        </Col>
        <Col className="column" sm={12} md={6} lg={4}>
        <div className="mid-box col">
            <h4>Weather</h4>
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/>
          <h5>{weather?.weather[0].description}</h5>
          </div>
        </Col>
        <Col className="column" sm={12} md={6} lg={4}>
        <div className="wind-box col">
        <h4>Wind</h4>
            <img src={wind2}/>
            <h5 className="speed">속도:{weather?.wind.speed}m/s</h5>
            <h5>방향:{weather?.wind.deg}°</h5>
            </div>
        </Col>
      </Row>
    </Container>
  )
}//icon URL: https://openweathermap.org/img/wn/10d@2x.png

export default WeatherSection;
