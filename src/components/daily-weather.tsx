import sunIcon from "../assets/images/icon-sunny.webp";

export function DailyWeather() {
  return (
    <div className="daily-weather rounded-[20px] px-6 py-10 flex flex-col md:flex-row justify-between mb-5">
      <div className="flex flex-col gap-2 items-center justify-center md:items-start">
        <p className="text-[28px]">Berlin, Germany</p>
        <p className="text-[18px]">Tuesday, Aug 5, 2025</p>
        <p></p>
      </div>
      <div className="flex justify-between items-center">
        <img className="w-[120px]" src={sunIcon} alt="sun" />
        <p className="text-[96px] font-bold">20°</p>
      </div>
    </div>
  );
}
