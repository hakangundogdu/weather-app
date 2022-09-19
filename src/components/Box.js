import { useWeather } from '../store/weather-context';

const Box = () => {
  const { cityData } = useWeather();

  const dateFormat = (dt) => {
    const milliseconds = dt * 1000;

    let myDate = new Date(milliseconds);

    let date = myDate.toLocaleString('en-GB').split(',')[0];

    let day = myDate.toLocaleString('en-US', { weekday: 'long' });

    return { date, day };
  };

  return (
    <>
      <div className="col-span-1 p-4 flex flex-col rounded-xl border-2 w-full h-96 border-slate-300 overflow-hidden ">
        {cityData ? (
          <>
            <p className="text-slate-900">{dateFormat(cityData.dt).day}</p>
            <p className="text-slate-900">{cityData.name}</p>
            <p className="text-slate-900">{cityData.weather[0].description}</p>
            <p className="text-slate-900">
              Feels Like: {cityData.main.feels_like}
            </p>
            <p className="text-slate-900">Humidity: {cityData.main.humidity}</p>
            <p className="text-slate-900">Pressure: {cityData.main.pressure}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Box;
