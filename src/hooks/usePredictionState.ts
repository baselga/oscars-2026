import { useState, useCallback } from "react";
import type { Nomination } from "../data";
import { oscars2026Nominations } from "../data";

interface Prediction {
  categoryId: string;
  slug: string;
}

export const usePredictionState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [copied, setCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const categories = oscars2026Nominations.categories;
  const currentCategory = categories[currentStep];
  const isLastStep = currentStep === categories.length - 1;
  const isFirstStep = currentStep === 0;

  const currentPrediction = predictions.find(
    (p) => p.categoryId === currentCategory.id
  );

  const openModal = useCallback(() => {
    setIsOpen(true);
    setCurrentStep(0);
    setPredictions([]);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCurrentStep(0);
    setPredictions([]);
    setCopied(false);
    setIsCompleted(false);
  }, []);

  const selectWinner = useCallback(
    (nomination: Nomination) => {
      const newPredictions = predictions.filter(
        (p) => p.categoryId !== currentCategory.id
      );
      newPredictions.push({
        categoryId: currentCategory.id,
        slug: nomination.slug,
      });
      setPredictions(newPredictions);
    },
    [predictions, currentCategory]
  );

  const goNext = useCallback(() => {
    if (isLastStep) {
      setIsCompleted(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [isLastStep]);

  const goPrev = useCallback(() => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [isFirstStep]);

  const copyToClipboard = useCallback(async () => {
    const predictionsToExport = predictions.map((p) => ({
      category: p.categoryId,
      slug: p.slug,
    }));
    const jsonString = JSON.stringify(predictionsToExport, null, 2);
    await navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [predictions]);

  return {
    // State
    isOpen,
    currentStep,
    predictions,
    copied,
    currentCategory,
    currentPrediction,
    // Computed
    isLastStep,
    isFirstStep,
    isCompleted,
    categories,
    // Progress
    progressPercentage: ((currentStep + 1) / categories.length) * 100,
    currentStepNumber: currentStep + 1,
    totalSteps: categories.length,
    // Actions
    openModal,
    closeModal,
    selectWinner,
    goNext,
    goPrev,
    copyToClipboard,
  };
};
