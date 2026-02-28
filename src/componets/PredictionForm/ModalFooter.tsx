interface ModalFooterProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  isLastStep: boolean;
}

export const ModalFooter = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
  isLastStep,
}: ModalFooterProps) => {
  return (
    <div className="bg-gray-100 p-6 flex gap-3 sticky bottom-0">
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        className={`flex-1 font-bold py-3 px-6 rounded-lg transition-all duration-200 ${
          isPreviousDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-500 text-white hover:bg-gray-600"
        }`}
      >
        Anterior
      </button>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`flex-1 font-bold py-3 px-6 rounded-lg transition-all duration-200 ${
          isNextDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-linear-to-r from-amber-300 to-yellow-600 text-amber-900 hover:from-amber-400 hover:to-yellow-700"
        }`}
      >
        {isLastStep ? "Completado" : "Siguiente"}
      </button>
    </div>
  );
};
