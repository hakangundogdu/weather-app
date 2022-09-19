import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useWeather } from '../store/weather-context';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: true,
};

const Map = () => {
  const { setSelectedCity, allData, day } = useWeather();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return;

  return (
    <div className="w-full h-full">
      <GoogleMap
        options={options}
        zoom={7}
        center={{ lat: 42.7339, lng: 25.4858 }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        defaultOptions={{ disableDefaultUI: false }}
      >
        {allData.map((city) => (
          <Marker
            icon={`http://openweathermap.org/img/wn/${city.daily[day].weather[0].icon}.png`}
            position={{ lat: city.lat, lng: city.lon }}
            key={city.id}
            onClick={() => {
              setSelectedCity(city.name);
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};
export default Map;
