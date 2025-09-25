import { Header } from "./components/Header";
import { Search } from "./components/search";

function App() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-6">
      <Header />
      <h1 className="font-bold text-[52px] my-12 px-2 md:w-[442px] lg:w-full mx-auto text-center">
        How’s the sky looking today?
      </h1>
      <Search />
    </div>
  );
}

export default App;
