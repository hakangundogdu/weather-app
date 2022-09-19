import { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: true,
};

const coordinates = {
  London: {
    lat: 51.509865,
    lng: -0.118092,
  },
  Leeds: {
    lat: 53.801277,
    lng: -1.548567,
  },
  Bristol: {
    lat: 51.454514,
    lng: -2.58791,
  },
};

const Map = () => {
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
        zoom={11}
        center={{ lat: 42.6975, lng: 23.3242 }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        defaultOptions={{ disableDefaultUI: false }}
      >
        {/* {properties.map((property) => (
              <Marker
                position={{ lat: property.latitude, lng: property.longitude }}
                key={property.listing_id}
                onClick={() => setSelectedProperty(property)}
              />
            ))} */}
      </GoogleMap>
    </div>
  );
};
export default Map;
