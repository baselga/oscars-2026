import { PredictionProvider } from "../../contexts/PredictionContext";
import { OpenButton } from "./OpenButton";
import { PredictionModal } from "./PredictionModal";

export const PredictionForm = () => {
  return (
    <PredictionProvider>
      <OpenButton />
      <PredictionModal />
    </PredictionProvider>
  );
};
