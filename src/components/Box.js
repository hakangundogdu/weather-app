import { useWeather } from '../store/weather-context';
import { dateFormat } from '../lib/date';

const Box = () => {
  const { allData, selectedCity, day } = useWeather();

  const filteredData = allData.filter((city) => city.name === selectedCity);

  return (
    <>
      <div className="col-span-1 p-6 flex flex-col rounded-xl border-2 w-full h-full border-slate-300 overflow-hidden ">
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
            <p className="text-slate-900">
              {dateFormat(filteredData[0].daily[day].dt).day}
            </p>

            <p className="text-slate-900">
              {filteredData[0].daily[day].weather[0].description}
            </p>
            <p className="text-slate-900">
              Feels Like: {filteredData[0].daily[day].feels_like.day}
            </p>
            <p className="text-slate-900">
              Humidity: {filteredData[0].daily[day].humidity}
            </p>
            <p className="text-slate-900">
              Pressure: {filteredData[0].daily[day].pressure}
            </p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Box;
