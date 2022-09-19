import { useEffect, useState } from 'react';
import axios from 'axios';
import { cities } from '../constants/cities';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const useWeather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCityWeather = async (city) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},bg&appid=${apiKey}&units=metric`
      );

      setData((prev) => [...prev, response.data]);
    };
    cities.forEach((city) => {
      fetchCityWeather(city);
    });
  }, []);

  return [data];
};
export default useWeather;
