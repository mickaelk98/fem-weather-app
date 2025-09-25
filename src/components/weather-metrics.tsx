export function WeatherMetrics() {
  return (
    <ul className="weather-metrics grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <li className="p-5">
        <p className="text-[18px]">Feels Like</p>
        <p className="text-[32px]">18°</p>
      </li>
      <li className="p-5">
        <p className="text-[18px]">Humidity</p>
        <p className="text-[32px]">46%</p>
      </li>
      <li className="p-5">
        <p className="text-[18px]">Wind</p>
        <p className="text-[32px]">14 km/h</p>
      </li>
      <li className="p-5">
        <p className="text-[18px]">Precipitation</p>
        <p className="text-[32px]">0 mm</p>
      </li>
    </ul>
  );
}
