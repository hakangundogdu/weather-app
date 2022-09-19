import { useEffect } from 'react';
import { useWeather } from './store/weather-context';
import Layout from './components/Layout';
import Map from './components/Map';
import Box from './components/Box';
import Slider from './components/Slider';

function App() {
  const { getAllData, allData } = useWeather();

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Layout>
      {allData.length === 27 ? (
        <>
          <div className="mt-6 grid h-96 grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-3  ">
            <div className="col-span-2 rounded-xl border overflow-hidden ">
              <Map />
            </div>
            <Box />
          </div>
          <Slider />
        </>
      ) : (
        <p>Loading</p>
      )}
    </Layout>
  );
}

export default App;
