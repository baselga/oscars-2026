import oscars2026Nominations, {
  players,
  type Category,
} from "../../data";
import { CategoryResult } from "./CategoryResult";
import type { Voter, VotersByNomination } from "./PoolResult.types";

const playerById = new Map(players.map((player) => [player.id, player]));

const getVotersByNomination = (category: Category): VotersByNomination => {
  const votersByNomination = new Map<string, Voter[]>();

  for (const [playerId, votes] of Object.entries(oscars2026Nominations.pool)) {
    const vote = votes.find((entry) => entry.category === category.id);

    if (!vote) {
      continue;
    }

    const player = playerById.get(playerId);

    if (!player) {
      continue;
    }

    const currentVoters = votersByNomination.get(vote.slug) ?? [];
    currentVoters.push({ id: player.id, name: player.name, img: player.img });
    votersByNomination.set(vote.slug, currentVoters);
  }

  return votersByNomination;
};

const votersByCategory = new Map<string, VotersByNomination>(
  oscars2026Nominations.categories.map((category) => [
    category.id,
    getVotersByNomination(category),
  ]),
);
const EMPTY_VOTERS_BY_NOMINATION: VotersByNomination = new Map();

export const PoolResult = () => {
  return (
    <section className="w-full">
      <h2 className="text-amber-100 text-3xl font-bold text-center mb-6">
        Resultado de la porra
      </h2>

      <div className="grid gap-5">
        {oscars2026Nominations.categories.map((category) => {
          const votersByNomination =
            votersByCategory.get(category.id) ?? EMPTY_VOTERS_BY_NOMINATION;

          return (
            <CategoryResult
              key={category.id}
              category={category}
              votersByNomination={votersByNomination}
            />
          );
        })}
      </div>
    </section>
  );
};
