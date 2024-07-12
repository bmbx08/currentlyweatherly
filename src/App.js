import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";
import TitleSection from "./component/TitleSection";
import SearchSection from "./component/SearchSection";
import WeatherSection from "./component/WeatherSection";
import SuggestSection from "./component/SuggestSection";
import newyork from "./images/newyork.png";
import hawaii from "./images/hawaii.png";
import london from "./images/london.png";
import beijing from "./images/beijing.png";
import paris from "./images/paris.png";
import tokyo from "./images/tokyo.png";

const cities = [
  {name: "New York",
    source: newyork,},
  {name: "London",
    source: london,},
  {name: "Tokyo",
    source: tokyo,},
  {name: "Paris",
    source: paris,},
  {name: "Beijing",
    source: beijing,},
  {name: "Hawaii",
    source: hawaii,},
];
const API_KEY = "6320e21052b10fe9eaa63c37ff048228";
let lang = "kr"; //en for english

//1. 앱 실행되자마자 현재위치기반의 날씨 정보가 보인다
//2. 도씨, 섭씨, 화씨 날씨 정보가 보인다.
//3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
//4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반 날씨가 나온다.
//6. 데이터를 로딩하는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fixedCity, setFixedCity] = useState("");

  const getCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("Current Location", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = new URL(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=metric`
      );
      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log("error message", error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=${lang}&units=metric`;
      let response = await fetch(url);
      console.log("response", response);
      let data = await response.json();
      console.log("data", data);
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log("error message", error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handleCityChange = (city) => {
    if (city == "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const roundNumber = (num) => {
    return Math.round(num * 100) / 100;
  };

  // const removeSpacing = (word) => {
  //   return word.split(" ").join("")
  // }

  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity(); //city state가 바뀐 뒤에 함수를 호출해야 되므로 useEffect안에 넣는다.
    }
  }, [city]);

  return (
    <div>
      <div className="container">
        <div className="weather-box">
          {loading ? (
            <>
              <ClipLoader
                color="#f88c6b"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
          ) : !errorMessage ? (
            <>
              <TitleSection />
              <SearchSection />
              <WeatherSection weather={weather} roundNumber={roundNumber} selectedCity={city} />
              <SuggestSection
                cities={cities}
                handleCityChange={handleCityChange}
                selectedCity={city}
                getLocation={getCurrentLocation}
                // removeSpacing={removeSpacing}
              />
            </>
          ) : (
            <div>{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

//꾸미기 ideas
//장소들 카드로 만들고 누르면 밑에 박스에 날씨 정보 보여주기
//지도에 위치들 점으로 표시하고 누르면 날씨 정보 출력하기
//*날씨를 이모티콘으로 표시하기(비-비이모티콘,맑음-해 이모티콘)
