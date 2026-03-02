import { NominationCard } from "./NominationCard";
import { usePredictions } from "../../hooks/usePredictions";

export const NominationsList = () => {
  const { currentCategory, currentPrediction, selectWinner } =
    usePredictions();

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        {currentCategory.name}
      </h3>

      <div className="space-y-3 mb-8">
        {currentCategory.nominations.map((nomination) => (
          <NominationCard
            key={nomination.slug}
            nomination={nomination}
            isSelected={currentPrediction?.slug === nomination.slug}
            onClick={selectWinner}
          />
        ))}
      </div>
    </div>
  );
};
