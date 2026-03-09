import type { Category } from "../../data";
import { NominationCard } from "./NominationCard";
import type { VotersByNomination } from "./PoolResult.types";

type CategoryResultProps = {
  category: Category;
  votersByNomination: VotersByNomination;
};

export const CategoryResult = ({ category, votersByNomination }: CategoryResultProps) => {
  return (
    <article className="rounded-xl border border-amber-300/30 bg-zinc-900/85 p-4 shadow-lg">
      <h3 className="text-xl font-semibold text-amber-300 mb-4">{category.name}</h3>

      <div className="grid gap-3 md:grid-cols-2">
        {category.nominations.map((nomination) => {
          const voters = votersByNomination.get(nomination.slug) ?? [];

          return (
            <NominationCard
              key={`${category.id}-${nomination.slug}`}
              categoryId={category.id}
              nomination={nomination}
              voters={voters}
            />
          );
        })}
      </div>
    </article>
  );
};
