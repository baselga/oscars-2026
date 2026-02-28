import type { Category } from "../data";

export const CategoryBox = ({ category }: { category: Category }) => {
  return (
    <article key={category.id} className="bg-amber-100 rounded-md p-4">
      <h3 className="text-amber-900 font-semibold mb-2">
        {category.name}
      </h3>

      <ul className="list-none text-amber-950 space-y-1 gap-2 grid md:grid-cols-2">
        {category.nominations.map((nomination, index) => {
          let title
          let info          

          if ("song" in nomination) {
            title = nomination.song
          }
          
          if ("nominee" in nomination) {
            title = nomination.nominee            
          }          

          if ("film" in nomination) {
            let name = nomination.film

            if ("country" in nomination) {
              name += ` (${nomination.country})`
            }

            if(title) {
              info = name
            } else {
              title = name
            }
          }

          return (
          <li 
            key={`${category.id}-${index}`}
            className="flex gap-2 items-center"
          >                      
            <div className="h-40 aspect-3-4 relative border border-amber-600 rounded-sm">
              <img
                src={nomination.img || "/placeholder.png"} 
                alt={title || info || "Nominación"}  
                className="inline-block mr-2 rounded h-full w-full object-cover object-top" 
              />
            </div>
            <div>
              <span className="text-xl">{title}</span>
              {info && <p className="text-sm text-amber-700">{info}</p>}
            </div>
          </li>
          );
        })}
      </ul>
    </article>
  )
}