import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { cityData } from '../data/cities';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState(false);
  const [day, setDay] = useState(0);
  const [selectedCity, setSelectedCity] = useState('Sofia');

  const getAllData = async () => {
    const getCityData = async (city) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly,minutely,alerts&appid=${apiKey}&units=metric`
        );
        setAllData((prev) => [
          ...prev,
          {
            id: city.id,
            name: city.name,
            lat: city.lat,
            lon: city.lon,
            daily: response.data.daily,
          },
        ]);
      } catch (error) {
        setError(true);
      }
    };

    cityData.forEach((city) => {
      getCityData(city);
    });
  };
  const contextValue = {
    error,
    getAllData,
    allData,
    day,
    setDay,
    selectedCity,
    setSelectedCity,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
