import { CompletionScreen } from "./CompletionScreen";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";
import { NominationsList } from "./NominationsList";
import { ProgressBar } from "./ProgressBar";
import { usePredictions } from "../../hooks/usePredictions";

export const PredictionModal = () => {
  const { isOpen, isCompleted, closeModal, progressPercentage } =
    usePredictions();

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    closeModal();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto"
        onClick={handleModalClick}
      >
        {/* Header and Progress Bar Container */}
        <div className="sticky top-0 z-20">
          <ModalHeader />
          <ProgressBar progress={progressPercentage} />
        </div>

        {/* Content */}
        <div className="p-8">
          {isCompleted ? <CompletionScreen /> : <NominationsList />}
        </div>

        {/* Footer */}
        {!isCompleted && <ModalFooter />}
      </div>
    </div>
  );
};
