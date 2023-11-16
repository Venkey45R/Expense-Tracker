import Homecomponent from "./modules/home/Home";

function App() {
  return (
    <div className="w-full min-h-screen py-10 bg-gray-700 text-center">
      <div className="relative">
        <h1 className="font-bold text-white text-2xl mx-auto pt-5 md:pt-10">EXPENSE TRACKER</h1>
        <Homecomponent />
      </div>
    </div>
  );
}

export default App;
