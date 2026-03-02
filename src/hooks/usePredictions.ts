import { useContext } from "react";
import { PredictionContext } from "../contexts/PredictionContext";

export const usePredictions = () => {
  const context = useContext(PredictionContext);
  if (context === undefined) {
    throw new Error("usePredictions must be used within a PredictionProvider");
  }
  return context;
};
