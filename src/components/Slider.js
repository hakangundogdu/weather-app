import { useWeather } from '../store/weather-context';
import { dateFormat } from '../lib/date';

const Slider = () => {
  const { day, setDay, allData } = useWeather();

  return (
    <div className="flex justify-center gap-2 md:gap-10">
      <button
        disabled={day === 0}
        onClick={() => setDay((prev) => prev - 1)}
        className="rounded-xl border border-slate-200 px-4 py-2 hover:bg-slate-200 bg-slate-100 shadow-lg"
      >
        Previous Day
      </button>
      <div className="rounded-xl border flex justify-center items-center border-slate-200 px-4 py-2 w-60 font-bold text-center bg-sky-100 shadow-lg">
        {dateFormat(allData[0].daily[day].dt).date}
        {',   '}
        {dateFormat(allData[0].daily[day].dt).day}
      </div>
      <button
        disabled={day === 7}
        onClick={() => setDay((prev) => prev + 1)}
        className="rounded-xl border border-slate-200 hover:bg-slate-200 px-4 py-2 bg-slate-100 shadow-lg"
      >
        Next Day
      </button>
    </div>
  );
};

export default Slider;
