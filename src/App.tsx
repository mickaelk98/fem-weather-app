import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <Header />
      <h1 className="font-bold text-[52px] my-12 p-6 md:w-[442px] lg:w-full mx-auto text-center">
        How’s the sky looking today?
      </h1>
    </div>
  );
}

export default App;
