import { CompletionScreen } from "./CompletionScreen";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";
import { NominationsList } from "./NominationsList";
import { ProgressBar } from "./ProgressBar";
import type { Nomination, Category } from "../../data";

interface PredictionModalProps {
  isOpen: boolean;
  currentStep: number;
  totalSteps: number;
  currentCategory: Category;
  currentPrediction: Nomination | undefined;
  isLastStep: boolean;
  isFirstStep: boolean;
  isCompleted: boolean;
  copied: boolean;
  progressPercentage: number;
  onClose: () => void;
  onSelectWinner: (nomination: Nomination) => void;
  onNext: () => void;
  onPrev: () => void;
  onCopy: () => void;
}

export const PredictionModal = ({
  isOpen,
  currentStep,
  totalSteps,
  currentCategory,
  currentPrediction,
  isLastStep,
  isFirstStep,
  isCompleted,
  copied,
  progressPercentage,
  onClose,
  onSelectWinner,
  onNext,
  onPrev,
  onCopy,
}: PredictionModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = () => {
    onClose();
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
          <ModalHeader
            currentStep={currentStep}
            totalSteps={totalSteps}
            onClose={onClose}
          />
          <ProgressBar progress={progressPercentage} />
        </div>

        {/* Content */}
        <div className="p-8">
          {isCompleted ? (
            <CompletionScreen isCopied={copied} onCopy={onCopy} />
          ) : (
            <NominationsList
              category={currentCategory}
              selectedNomination={currentPrediction}
              onSelectNomination={onSelectWinner}
            />
          )}
        </div>

        {/* Footer */}
        {!isCompleted && (
          <ModalFooter
            onPrevious={onPrev}
            onNext={onNext}
            isPreviousDisabled={isFirstStep}
            isNextDisabled={!currentPrediction}
            isLastStep={isLastStep}
          />
        )}
      </div>
    </div>
  );
};
