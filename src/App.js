import { useEffect } from 'react';
import { useWeather } from './store/weather-context';
import Layout from './components/Layout';
import Map from './components/Map';
import Box from './components/Box';
import Slider from './components/Slider';
import Spinner from './components/Spinner';

function App() {
  const { getAllData, allData, error } = useWeather();

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Layout>
      {allData.length === 27 && (
        <>
          <div className="mt-6 grid md:h-96 grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-3  ">
            <div className=" md:col-span-2 h-96 w-full rounded-xl border overflow-hidden ">
              <Map />
            </div>
            <Box />
          </div>
          <Slider />
        </>
      )}
      {error || allData.length === 27 ? null : <Spinner />}

      {error && (
        <p className="text-center mt-36 text-xl text-slate-900">
          {'Could not fetch weather data!'}
        </p>
      )}
    </Layout>
  );
}

export default App;
