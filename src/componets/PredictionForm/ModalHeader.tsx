interface ModalHeaderProps {
  currentStep: number;
  totalSteps: number;
  onClose: () => void;
}

export const ModalHeader = ({
  currentStep,
  totalSteps,
  onClose,
}: ModalHeaderProps) => {
  return (
    <div className="bg-linear-to-r from-amber-300 to-yellow-600 p-6 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-amber-900">
          Predicciones Oscars 2026
        </h2>
        <p className="text-amber-800 text-sm mt-1">
          Paso {currentStep + 1} de {totalSteps}
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-amber-900 hover:text-amber-700 text-2xl font-bold transition-colors"
        aria-label="Cerrar"
      >
        ×
      </button>
    </div>
  );
};
