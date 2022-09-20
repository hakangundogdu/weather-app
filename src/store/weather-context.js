import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { cityDetail } from '../constants/cities';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState('');
  const [day, setDay] = useState(0);
  const [selectedCity, setSelectedCity] = useState('Sofia');

  const getAllData = async () => {
    try {
      const getCityData = async (city) => {
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
      };

      cityDetail.forEach((city) => {
        getCityData(city);
      });
    } catch (error) {
      setError('Could not fetch weather.');
    }
  };

  // useEffect(() => {
  //   const filteredData = allData.filter((city) => city.name === selectedCity);

  //   setCityData(filteredData);
  // }, [selectedCity, allData]);

  // const getAllCurrent = async () => {
  //   try {
  //     const fetchCityWeather = async (city) => {
  //       const response = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${city},bg&appid=${apiKey}&units=metric`
  //       );

  //       setCityArray((prev) => [
  //         ...prev,
  //         {
  //           id: response.data.id,
  //           name: response.data.name,
  //           lat: response.data.coord.lat,
  //           lon: response.data.coord.lon,
  //         },
  //       ]);
  //       setCurrentData((prev) => [...prev, response.data]);
  //     };

  //     cities.forEach((city) => {
  //       fetchCityWeather(city);
  //     });
  //   } catch (error) {
  //     setError('Could not fetch weather.');
  //   }
  // };

  // const getCityData = async (city) => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly,minutely,alerts&appid=${apiKey}&units=metric`
  //     );
  //     setCityData(response.data);
  //   } catch (error) {
  //     setError('Could not fetch weather.');
  //   }
  // };

  // const getForecast = async ({ city }) => {
  //   try {
  //     const resForecast = await axios.get(
  //       `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly,minutely,alerts&appid=${apiKey}&units=metric`
  //     );
  //     setForecastData(resForecast.data);
  //   } catch (error) {
  //     setError('Could not fetch weather.');
  //   }
  // };

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
