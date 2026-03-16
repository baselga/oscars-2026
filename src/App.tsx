// import { Countdown } from "./components/Countdown";
import { HeaderPage } from "./components/HeaderPage";
import { Players } from "./components/Players";
import { Winner } from "./components/Winner";
// import { PredictionForm } from "./components/PredictionForm";
import { PoolResult } from "./components/PoolResult";
import oscars2026Nominations, { players } from "./data";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className={`flex flex-col min-h-screen px-4`}>
        <HeaderPage />
        <div
          className="
        bg-linear-to-r from-amber-300 to-yellow-600 max-w-3xl w-full mx-auto px-4 py-6 rounded-md flex flex-col gap-4"
        >
          <h1 className="text-amber-900 text-5xl font-bold text-center">
            Porra Oscars 2026
          </h1>
          <Winner />
          <Players />
          {/* <Countdown />
          <div className="flex justify-center">
            <PredictionForm />
          </div> */}
        </div>

        <div className="max-w-6xl w-full mx-auto mt-8 pb-10">
          {players.length ===
            Object.keys(oscars2026Nominations.pool).length && <PoolResult />}
        </div>
      </div>
    </div>
  );
}

export default App;
