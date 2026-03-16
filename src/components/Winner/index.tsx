import oscars2026Nominations, { players } from "../../data";

const calculatePlayerScore = (playerId: string): number => {
  const playerPredictions = oscars2026Nominations.pool[playerId];
  if (!playerPredictions) return 0;

  let score = 0;
  for (const prediction of playerPredictions) {
    const category = oscars2026Nominations.categories.find(
      (cat) => cat.id === prediction.category,
    );
    if (category) {
      const winner = category.nominations.find(
        (nom) => nom.slug === prediction.slug && nom.winner,
      );
      if (winner) {
        score++;
      }
    }
  }
  return score;
};

export const Winner = () => {
  // Calcular puntuaciones de todos los jugadores
  const playersWithScores = players.map((player) => ({
    ...player,
    score: calculatePlayerScore(player.id),
  }));

  // Encontrar la puntuación máxima
  const maxScore = Math.max(...playersWithScores.map((p) => p.score));

  // Si nadie tiene puntos, no mostrar nada
  if (maxScore === 0) return null;

  // Filtrar los jugadores con la puntuación máxima
  const winners = playersWithScores.filter((p) => p.score === maxScore);

  return (
    <div className="mt-8">
      <h2 className="text-amber-900 text-3xl font-bold text-center mb-6">
        {winners.length > 1 ? "🏆 Ganadores 🏆" : "🏆 Ganadora 🏆"}
      </h2>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {winners.map((winner) => (
          <div
            key={winner.id}
            className="relative bg-yellow-300 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            {/* Imagen del ganador */}
            <div className="rounded-xl overflow-hidden border-4 border-yellow-300">
              <img
                src={winner.img}
                alt={winner.name}
                width={280}
                height={280}
                className="w-70 h-70 object-cover flex"
              />
            </div>

            {/* Información del ganador */}
            <div className=" bg-linear-to-t from-yellow-400 to-yellow-300 text-amber-900 text-center py-3">
              <div className="text-xl font-bold">{winner.name}</div>
              <div className="text-2xl font-extrabold">
                {winner.score} aciertos
              </div>
            </div>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-linear-to-br from-yellow-400/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
