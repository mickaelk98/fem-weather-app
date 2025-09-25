import data from "../data/daily-forecats";

export function DailyForecast() {
  return (
    <div className="daily-forecast">
      <h3 className="text-xl font-semibold mb-5">Daily forecast</h3>
      <ul className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {data.map((item) => (
          <li className="px-2.5 py-4 flex flex-col gap-4" key={item.day}>
            <p className="text-center">{item.day}</p>
            <img src={item.icon} alt={item.day} />
            <p className="flex justify-between">
              <span>{item.min}°</span> <span>{item.max}°</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
