import { useWeather } from '../store/weather-context';

const Forecast = ({ foreacastData }) => {
  const { forecastData } = useWeather();

  const dateFormat = (dt) => {
    const milliseconds = dt * 1000;

    let myDate = new Date(milliseconds);

    let date = myDate.toLocaleString('en-GB').split(',')[0];

    let day = myDate.toLocaleString('en-US', { weekday: 'long' });

    return { date, day };
  };

  console.log(forecastData.daily[0]);

  return (
    <>
      <div className="mt-6 font-bold text-slate-900  ">Daily Forecast</div>
      {forecastData ? (
        <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-2 md:grid-cols-7  ">
          {' '}
          {forecastData.daily.slice(1).map((item) => (
            <div
              key={item.dt}
              className="col-span-1 p-4 flex flex-col rounded-xl border-2 w-full h-60 border-slate-300 overflow-hidden "
            >
              <img
                className="w-20 h-20"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt=""
              />
              <p className="text-slate-900">{dateFormat(item.dt).date}</p>
              <p className="text-slate-900">{dateFormat(item.dt).day}</p>
              <p className="text-slate-900">{item.weather[0].description}</p>
              <p className="text-slate-900">
                Feels Like: {item.feels_like.day}
              </p>
              <p className="text-slate-900">Humidity: {item.humidity}</p>
              <p className="text-slate-900">Pressure: {item.pressure}</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Forecast;
