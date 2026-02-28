import { OpenButton } from "./PredictionForm/OpenButton";
import { PredictionModal } from "./PredictionForm/PredictionModal";
import { usePredictionState } from "../hooks/usePredictionState";

export const PredictionForm = () => {
  const state = usePredictionState();

  return (
    <>
      <OpenButton onClick={state.openModal} />

      <PredictionModal
        isOpen={state.isOpen}
        currentStep={state.currentStep}
        totalSteps={state.totalSteps}
        currentCategory={state.currentCategory}
        currentPrediction={state.currentPrediction}
        isLastStep={state.isLastStep}
        isFirstStep={state.isFirstStep}
        isCompleted={state.isCompleted}
        copied={state.copied}
        progressPercentage={state.progressPercentage}
        onClose={state.closeModal}
        onSelectWinner={state.selectWinner}
        onNext={state.goNext}
        onPrev={state.goPrev}
        onCopy={state.copyToClipboard}
      />
    </>
  );
};
