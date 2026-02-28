import type { Category, Nomination } from "../../data";
import { NominationCard } from "./NominationCard";

interface NominationsListProps {
  category: Category;
  selectedNomination: Nomination | undefined;
  onSelectNomination: (nomination: Nomination) => void;
}

export const NominationsList = ({
  category,
  selectedNomination,
  onSelectNomination,
}: NominationsListProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        {category.name}
      </h3>

      <div className="space-y-3 mb-8">
        {category.nominations.map((nomination) => (
          <NominationCard
            key={nomination.slug}
            nomination={nomination}
            isSelected={selectedNomination?.slug === nomination.slug}
            onClick={onSelectNomination}
          />
        ))}
      </div>
    </div>
  );
};
