import oscars2026Nominations, { players } from "../../data";

const calculatePlayerScore = (playerId: string): number => {
  const playerPredictions = oscars2026Nominations.pool[playerId];
  if (!playerPredictions) return 0;

  let score = 0;
  for (const prediction of playerPredictions) {
    const category = oscars2026Nominations.categories.find(
      (cat) => cat.id === prediction.category
    );
    if (category) {
      const winner = category.nominations.find(
        (nom) => nom.slug === prediction.slug && nom.winner
      );
      if (winner) {
        score++;
      }
    }
  }
  return score;
};

export const Players = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {players.map((player) => {
        const score = calculatePlayerScore(player.id);
        return (
          <div key={player.id} className="relative rounded-lg overflow-hidden">
            <img
              src={player.img}
              alt={player.name}
              width={120}
              height={120}
              className="aspect-square"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-1 text-sm font-semibold">
              {score} aciertos
            </div>
          </div>
        );
      })}
    </div>
  );
};
