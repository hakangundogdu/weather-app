import { useWeather } from '../store/weather-context';
import { dateFormat } from '../lib/date';

const Box = () => {
  const { allData, selectedCity, day } = useWeather();
  const filteredData = allData.filter((city) => city.name === selectedCity);

  const weather = {
    date: dateFormat(filteredData[0].daily[day].dt).date,
    day: dateFormat(filteredData[0].daily[day].dt).day,
    icon: `http://openweathermap.org/img/wn/${filteredData[0].daily[day].weather[0].icon}@2x.png`,
    name: filteredData[0].name,
    degree: filteredData[0].daily[day].feels_like.day.toFixed(0),
    desc: filteredData[0].daily[day].weather[0].description,
  };

  console.log(weather.desc[0] + weather.desc[1] + weather.desc[2]);

  return (
    <>
      <div className="col-span-1 p-10 flex flex-col  gap-y-2 rounded-xl border w-full h-full bg-sky-100 shadow-lg overflow-hidden ">
        {allData.length === 27 ? (
          <>
            <p className="text-sky-500 font-semibold">
              {dateFormat(filteredData[0].daily[day].dt).date},{' '}
              {dateFormat(filteredData[0].daily[day].dt).day}
            </p>
            <p className="text-slate-900 font-bold text-2xl">
              {filteredData[0].name}
            </p>
            <img
              className="w-24 h-24"
              src={`http://openweathermap.org/img/wn/${filteredData[0].daily[day].weather[0].icon}@2x.png`}
              alt=""
            />
            <p className="text-slate-900 text-2xl font-bold">
              {weather.degree} ºC
            </p>

            <p className="text-slate-600">
              {weather.desc[0].toUpperCase()}
              {weather.desc.slice(1)}
            </p>

            <p className="text-slate-600">
              Humidity: {filteredData[0].daily[day].humidity}
            </p>
            <p className="text-slate-600">
              Pressure: {filteredData[0].daily[day].pressure}
            </p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Box;
