import { Header } from "./components/Header";
import { Search } from "./components/search";
import { DailyForecast } from "./components/daily-forecast";
import { DailyWeather } from "./components/daily-weather";
import { HourlyForecast } from "./components/hourly-forecast";
import { WeatherMetrics } from "./components/weather-metrics";

function App() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-6">
      <Header />
      <h1 className="font-bold text-[52px] my-12 px-2 md:w-[442px] lg:w-full mx-auto text-center">
        How’s the sky looking today?
      </h1>
      <Search />
      <main className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-12 mb-12 md:mb-20">
        <section>
          <DailyWeather />
          <WeatherMetrics />
          <DailyForecast />
        </section>
        <section>
          <HourlyForecast />
        </section>
      </main>
    </div>
  );
}

export default App;
