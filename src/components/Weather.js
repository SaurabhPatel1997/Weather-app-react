import React from "react";
import axios from "axios";

const Weather = ({ location, setLocation, data, setData }) => {
  const searchLocation = async (event) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
    if (event.key === "Enter") {
      await axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            className="serach-input"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>{Math.round((data.main.temp.toFixed() - 32) / 1.8)}°C</h1>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">
                  {Math.round((data.main.feels_like.toFixed() - 32) / 1.8)}°C
                </p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Weather.defaultProps = {
  location: "",
  setLocation: () => {},
  data: null,
  setData: () => {},
};

export default Weather;
