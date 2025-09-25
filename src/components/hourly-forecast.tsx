import dorpdownLogo from "../assets/images/icon-dropdown.svg";
import data from "../data/hourly-forecast";

export function HourlyForecast() {
  return (
    <div className="hourly-forecast px-4 py-5 xl:w-[384px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Hourly forecast</h3>
        <div className="flex items-center gap-2 px-4 py-2 rounded-[8px] bg-[var(--neutral-600)] cursor-pointer">
          <p>Tuesday</p>
          <img src={dorpdownLogo} alt="dorpdown logo" />
        </div>
      </div>
      <ul className="flex flex-col gap-4">
        {data.map((item) => (
          <li
            className="flex justify-between items-center px-3 py-2.5 rounded-[8px] bg-[var(--neutral-700)]"
            key={item.time}
          >
            <div className="flex items-center gap-2">
              <img className="w-10" src={item.icon} alt={item.time} />
              <p>{item.time} PM</p>
            </div>
            <p>{item.temp}°</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
