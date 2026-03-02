import { createContext } from "react";
import type { ReactNode } from "react";
import { usePredictionState } from "../hooks/usePredictionState";
import type { Nomination, Category } from "../data";

interface Prediction {
  categoryId: string;
  slug: string;
}

interface PredictionContextValue {
  // State
  isOpen: boolean;
  currentStep: number;
  predictions: Prediction[];
  copied: boolean;
  currentCategory: Category;
  currentPrediction: Prediction | undefined;
  // Computed
  isLastStep: boolean;
  isFirstStep: boolean;
  isCompleted: boolean;
  categories: Category[];
  progressPercentage: number;
  currentStepNumber: number;
  totalSteps: number;
  // Actions
  openModal: () => void;
  closeModal: () => void;
  selectWinner: (nomination: Nomination) => void;
  goNext: () => void;
  goPrev: () => void;
  copyToClipboard: () => void;
}

const PredictionContext = createContext<PredictionContextValue | undefined>(
  undefined
);

interface PredictionProviderProps {
  children: ReactNode;
}

export const PredictionProvider = ({ children }: PredictionProviderProps) => {
  const state = usePredictionState();

  return (
    <PredictionContext.Provider value={state}>
      {children}
    </PredictionContext.Provider>
  );
};

export { PredictionContext };
