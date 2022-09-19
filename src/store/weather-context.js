import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { cities } from '../constants/cities';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  const [currentData, setCurrentData] = useState([]);
  const [forecastData, setForecastData] = useState();
  const [cityData, setCityData] = useState();
  const [error, setError] = useState('');

  //product that clicked.
  const [city, setCity] = useState('Sofia');

  const getAllCurrent = async () => {
    try {
      const fetchCityWeather = async (city) => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},bg&appid=${apiKey}&units=metric`
        );

        setCurrentData((prev) => [...prev, response.data]);
      };

      cities.forEach((city) => {
        fetchCityWeather(city);
      });
    } catch (error) {
      setError('Could not fetch weather.');
    }
  };

  const getCityData = async (city) => {
    try {
      const resCurrent = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},bg&appid=${apiKey}&units=metric`
      );
      setCityData(resCurrent.data);
      const resForecast = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&exclude=hourly,minutely,alerts&appid=${apiKey}`
      );

      setForecastData(resForecast.data);
    } catch (error) {
      setError('Could not fetch weather.');
    }
  };

  const contextValue = {
    currentData,
    getAllCurrent,
    getCityData,
    cityData,
    forecastData,
    error,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
