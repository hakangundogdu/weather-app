import { useWeather } from "../store/weather-context";
import { dateFormat } from "../lib/date";

const Box = () => {
  const { allData, selectedCity, day } = useWeather();
  const filteredData = allData.filter((city) => city.name === selectedCity);

  const weather = {
    date: dateFormat(filteredData[0].daily[day].dt).date,
    day: dateFormat(filteredData[0].daily[day].dt).day,
    icon: `http://openweathermap.org/img/wn/${filteredData[0].daily[day].weather[0].icon}@2x.png`,
    name: filteredData[0].name,
    degree: filteredData[0].daily[day].temp.day.toFixed(0),
    min: filteredData[0].daily[day].temp.min.toFixed(0),
    max: filteredData[0].daily[day].temp.max.toFixed(0),
    desc: filteredData[0].daily[day].weather[0].description,
    humidity: filteredData[0].daily[day].humidity,
    rain: filteredData[0].daily[day].rain,
    pressure: filteredData[0].daily[day].pressure,
  };

  return (
    <>
      <div className="col-span-1 p-10 flex flex-col  gap-y-2 rounded-xl border w-full h-full bg-white border-sky-200 shadow-lg overflow-hidden ">
        {allData.length === 43 ? (
          <>
            <p className="text-sky-500 font-semibold">
              {weather.date}, {weather.day}
            </p>
            <p className="text-slate-900 font-bold text-2xl">{weather.name}</p>
            <img className="w-24 h-24" src={weather.icon} alt="" />
            <p className="text-slate-900 text-2xl font-bold">
              {weather.degree} ºC{" "}
              <span className="ml-6 text-base font-normal">
                {weather.max} ºC / {weather.min} ºC
              </span>
            </p>

            <p className="capitalize font-semibold text-slate-600">
              {weather.desc}
            </p>
            <p className="text-slate-600">
              <span className="font-semibold text-sky-500">Humidity: </span>{" "}
              {weather.humidity} %
            </p>
            <p className="text-slate-600">
              <span className="font-semibold text-sky-500">Rain: </span>{" "}
              {weather.rain || 0} %
            </p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Box;
