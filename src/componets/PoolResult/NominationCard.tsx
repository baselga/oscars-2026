import type { Nomination } from "../../data";
import type { Voter } from "./PoolResult.types";

const FALLBACK_NOMINATION_IMAGE = "placeholder.avif";

const nominationDetailRules: Array<{ key: keyof Nomination; label: string }> = [
  { key: "nominee", label: "Nominado" },
  { key: "film", label: "Pelicula" },
  { key: "song", label: "Cancion" },
  { key: "country", label: "Pais" },
  { key: "productionDesign", label: "Diseno produccion" },
  { key: "setDecoration", label: "Decoracion set" },
];

const getNominationTitle = (nomination: Nomination): string => {
  return nomination.film ?? nomination.nominee ?? nomination.song ?? nomination.slug;
};

const getNominationDetails = (nomination: Nomination): string[] => {
  return nominationDetailRules.flatMap(({ key, label }) => {
    const value = nomination[key];
    return value ? [`${label}: ${value}`] : [];
  });
};

type NominationCardProps = {
  categoryId: string;
  nomination: Nomination;
  voters: Voter[];
};

export const NominationCard = ({
  categoryId,
  nomination,
  voters,
}: NominationCardProps) => {
  const nominationTitle = getNominationTitle(nomination);
  const details = getNominationDetails(nomination);

  return (
    <div className="rounded-lg bg-zinc-800/80 p-3 border border-zinc-700">
      <div className="flex gap-3">
        <img
          src={nomination.img ?? FALLBACK_NOMINATION_IMAGE}
          alt={nominationTitle}
          className="h-24 w-16 object-cover rounded-md shrink-0"
        />

        <div className="min-w-0 flex-1">
          <p className="text-amber-100 font-semibold leading-tight">{nominationTitle}</p>

          {details.length > 0 ? (
            <ul className="mt-2 space-y-1 text-sm text-zinc-200">
              {details.map((detail) => (
                <li key={`${categoryId}-${nomination.slug}-${detail}`}>{detail}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-3">
            {voters.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {voters.map((voter) => (
                  <div
                    key={`${nomination.slug}-${voter.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-100/10 px-2 py-1"
                  >
                    <img
                      src={voter.img}
                      alt={voter.name}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="text-sm text-amber-100">{voter.name}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
