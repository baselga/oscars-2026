import oscars2026Nominations from "../data";
import { CategoryBox } from "./CategoryBox";

export const Nominations = () => {
  return (
    <section className="mt-4 flex flex-col gap-4">
      <h2 className="text-amber-900 text-3xl font-bold text-center">
        Nominaciones {oscars2026Nominations.year}
      </h2>
      {oscars2026Nominations.categories.map((category) => (
        <CategoryBox key={category.id} category={category} />
      ))}
    </section>
  );
};
