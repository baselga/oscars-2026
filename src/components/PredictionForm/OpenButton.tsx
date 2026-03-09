import { usePredictions } from "../../hooks/usePredictions";

export const OpenButton = () => {
  const { openModal } = usePredictions();

  return (
    <button
      onClick={openModal}
      className="bg-linear-to-r from-amber-700 to-yellow-800 hover:from-amber-800 hover:to-yellow-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
    >
      Comenzar
    </button>
  );
};
