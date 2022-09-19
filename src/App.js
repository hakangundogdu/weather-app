import { useState, useEffect } from 'react';
import { useWeather } from './store/weather-context';
import Layout from './components/Layout';
import Map from './components/Map';
import Box from './components/Box';

function App() {
  const { currentData, getAllCurrent, getCityData, forecastData } =
    useWeather();
  const [city, setCity] = useState('Sofia');

  useEffect(() => {
    getAllCurrent();
  }, []);

  useEffect(() => {
    getCityData(city);
  }, [city]);

  return (
    <Layout>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-3  ">
        <div className="col-span-2 rounded-xl border overflow-hidden ">
          <Map setCity={setCity} />
        </div>
        <Box />
      </div>
      <div className="mt-6   ">
        <ul>
          {currentData
            ? currentData.map((city) => (
                <li onClick={() => setCity(city.name)} key={city.id}>
                  {city.name} : {city.weather[0].description},{' '}
                  {city.main.feels_like},
                </li>
              ))
            : null}
        </ul>
      </div>
    </Layout>
  );
}

export default App;
