import type { Nomination } from "../../data";

interface NominationCardProps {
  nomination: Nomination;
  isSelected: boolean;
  onClick: (nomination: Nomination) => void;
}

const NominationDetails = ({ nomination }: { nomination: Nomination }) => {
  return (
    <div className="flex-1">
      {nomination.film && (
        <p className="font-semibold text-gray-800">{nomination.film}</p>
      )}
      {nomination.nominee && (
        <p className="text-gray-700">{nomination.nominee}</p>
      )}
      {nomination.song && (
        <p className="text-gray-700">{nomination.song}</p>
      )}
      {nomination.country && (
        <p className="text-sm text-gray-600">{nomination.country}</p>
      )}
      {nomination.productionDesign && (
        <p className="text-sm text-gray-600">
          Diseño: {nomination.productionDesign}
        </p>
      )}
      {nomination.setDecoration && (
        <p className="text-sm text-gray-600">
          Decoración: {nomination.setDecoration}
        </p>
      )}
    </div>
  );
};

export const NominationCard = ({
  nomination,
  isSelected,
  onClick,
}: NominationCardProps) => {
  const handleClick = () => onClick(nomination);

  return (
    <button
      onClick={handleClick}
      className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
        isSelected
          ? "border-amber-400 bg-amber-50 shadow-lg"
          : "border-gray-300 bg-white hover:border-amber-300 hover:bg-amber-50"
      }`}
    >
      <div className="flex items-center gap-4">
        {nomination.img && (
          <img
            src={nomination.img}
            alt={
              nomination.film ||
              nomination.nominee ||
              nomination.song ||
              "Nominación"
            }
            className="w-14 h-20 rounded-lg object-cover shrink-0 object-top"
          />
        )}
        <NominationDetails nomination={nomination} />
        {isSelected && <div className="text-2xl shrink-0">✓</div>}
      </div>
    </button>
  );
};
