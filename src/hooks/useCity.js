import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const useCity = (city) => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const fetchCityWeather = async (city) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},bg&appid=${apiKey}&units=metric`
      );

      setCityData(response.data);
    };

    fetchCityWeather(city);
  }, []);

  return [cityData];
};
export default useCity;
