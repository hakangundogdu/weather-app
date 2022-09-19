import { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useWeather } from '../store/weather-context';
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: true,
};

const Map = ({ setCity }) => {
  const { currentData } = useWeather();

  // const properties = useSelector((state) => state.listing.properties);
  // const searchLocation = useSelector((state) => state.listing.searchLocation);

  // const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    googleMapsApiKey: 'AIzaSyB8uvzGEy582xEpEolbTmn6mQ51_fgfpEM',
  });

  if (!isLoaded) return;

  return (
    <div className="w-full h-96">
      <GoogleMap
        options={options}
        zoom={7}
        center={{ lat: 42.4328, lng: 25.6419 }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        defaultOptions={{ disableDefaultUI: false }}
      >
        {currentData.map((city) => (
          <Marker
            position={{ lat: city.coord.lat, lng: city.coord.lon }}
            key={city.id}
            onClick={() => setCity(city.name)}
          />
        ))}
      </GoogleMap>
    </div>
  );
};
export default Map;
