import { Countdown } from "./componets/Countdown";
import { HeaderPage } from "./componets/HeaderPage";
import { PredictionForm } from "./componets/PredictionForm";

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
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="rounded-lg overflow-hidden">
              <img src="players/antonio.avif" alt="Antonio" width={120} height={120} className="aspect-square" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="players/tonyi.avif" alt="Toñi" width={120} height={120} className="aspect-square" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="players/ruth.avif" alt="Ruth" width={120} height={120} className="aspect-square" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="players/sara.avif" alt="Sara" width={120} height={120} className="aspect-square" />  
            </div>
          </div>
          <Countdown />
          <div className="flex justify-center">
            <PredictionForm />
          </div>
          {/* <Nominations /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
