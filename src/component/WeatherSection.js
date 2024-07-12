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
        <div>Weather Results for..{selectedCity}</div>
      <Row className="weather-section">
        <Col className="temp-box col" sm={12} md={6} lg={4}>
            <img src={thermometer}/>
            <div>
                <h4>{weather?.main.temp}°C</h4>
                <h4>{weather && roundNumber(weather.main.temp*1.8+32)}°F</h4>
            </div>
        </Col>
        <Col className="mid-box col" sm={12} md={6} lg={4}>
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/>
          <h4>{weather?.weather[0].description}</h4>
        </Col>
        <Col className="wind-box col" sm={12} md={6} lg={4}>
            <img src={wind2}/>
            <h4>속도:{weather?.wind.speed}</h4>
            <h4>방향:{weather?.wind.deg}°</h4>
        </Col>
      </Row>
    </Container>
  )
}//icon URL: https://openweathermap.org/img/wn/10d@2x.png

export default WeatherSection;
