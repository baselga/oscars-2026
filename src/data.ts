export type OscarsData = {
  edition: number;
  year: number;
  ceremonyDate: string;
  source: string;
  categories: Category[];
  pool: Record<string, { category: string; slug: string }[]>;
};

export type Category = {
  id: string;
  name: string;
  nominations: Nomination[];
};

export type Nomination = {
  film?: string;
  img?: string;
  nominee?: string;
  song?: string;
  country?: string;
  productionDesign?: string;
  setDecoration?: string;
  slug: string;
  winner: boolean;
};

export type Player = {
  id: string;
  name: string;
  img: string;
};

export const players: Player[] = [
  {
    id: "antonio",
    name: "Antonio",
    img: "players/antonio.avif",
  },
  {
    id: "tonyi",
    name: "Toñi",
    img: "players/tonyi.avif",
  },
  {
    id: "ruth",
    name: "Ruth",
    img: "players/ruth.avif",
  },
  {
    id: "sara",
    name: "Sara",
    img: "players/sara.avif",
  },
] as const;

export const oscars2026Nominations: OscarsData = {
  edition: 98,
  year: 2026,
  ceremonyDate: "2026-03-16T01:00:00",
  source: "https://www.oscars.org/oscars/ceremonies/2026",
  categories: [
    {
      id: "best-picture",
      name: "Mejor película",
      nominations: [
        {
          film: "Bugonia",
          img: "films/bugonia.avif",
          slug: "bugonia",
          winner: false,
        },
        {
          film: "F1: la película",
          img: "films/f1.avif",
          slug: "f1-la-pelicula",
          winner: false,
        },
        {
          film: "Frankenstein",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: false,
        },
        {
          film: "Hamnet",
          img: "films/hamnet.avif",
          slug: "hamnet",
          winner: false,
        },
        {
          film: "Marty Supreme",
          img: "films/marty-supreme.avif",
          slug: "marty-supreme",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: true,
        },
        {
          film: "El agente secreto",
          img: "films/el-agente-secreto.avif",
          slug: "el-agente-secreto",
          winner: false,
        },
        {
          film: "Valor sentimental",
          img: "films/valor-sentimental.avif",
          slug: "valor-sentimental",
          winner: false,
        },
        {
          film: "Sinners",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
        {
          film: "Sueños de trenes",
          img: "films/suenos-de-trenes.avif",
          slug: "suenos-de-trenes",
          winner: false,
        },
      ],
    },
    {
      id: "best-directing",
      name: "Mejor dirección",
      nominations: [
        {
          nominee: "Chloé Zhao",
          film: "Hamnet",
          img: "nominee/chloe-zhao.avif",
          slug: "chloe-zhao",
          winner: false,
        },
        {
          nominee: "Josh Safdie",
          film: "Marty Supreme",
          img: "nominee/josh-safdie.avif",
          slug: "josh-safdie",
          winner: false,
        },
        {
          nominee: "Paul Thomas Anderson",
          film: "Una batalla tras otra",
          img: "nominee/paul-thomas-anderson.avif",
          slug: "paul-thomas-anderson",
          winner: true,
        },
        {
          nominee: "Joachim Trier",
          film: "Valor sentimental",
          img: "nominee/joachim-trier.avif",
          slug: "joachim-trier",
          winner: false,
        },
        {
          nominee: "Ryan Coogler",
          film: "Sinners",
          img: "nominee/ryan-coogler.avif",
          slug: "ryan-coogler",
          winner: false,
        },
      ],
    },
    {
      id: "best-actor",
      name: "Mejor actor",
      nominations: [
        {
          nominee: "Timothée Chalamet",
          film: "Marty Supreme",
          img: "nominee/timothee-chalamet.avif",
          slug: "timothee-chalamet",
          winner: false,
        },
        {
          nominee: "Leonardo DiCaprio",
          film: "Una batalla tras otra",
          img: "nominee/leonardo-dicaprio.avif",
          slug: "leonardo-dicaprio",
          winner: false,
        },
        {
          nominee: "Ethan Hawke",
          film: "Blue Moon",
          img: "nominee/ethan-hawke.avif",
          slug: "ethan-hawke",
          winner: false,
        },
        {
          nominee: "Michael B. Jordan",
          film: "Sinners",
          img: "nominee/michael-b-jordan.avif",
          slug: "michael-b-jordan",
          winner: true,
        },
        {
          nominee: "Wagner Moura",
          film: "El agente secreto",
          img: "nominee/wagner-moura.avif",
          slug: "wagner-moura",
          winner: false,
        },
      ],
    },
    {
      id: "best-actress",
      name: "Mejor actriz",
      nominations: [
        {
          nominee: "Jessie Buckley",
          film: "Hamnet",
          img: "nominee/jessie-buckley.avif",
          slug: "jessie-buckley",
          winner: true,
        },
        {
          nominee: "Rose Byrne",
          film: "If I Had Legs I'd Kick You",
          img: "nominee/rose-byrne.avif",
          slug: "rose-byrne",
          winner: false,
        },
        {
          nominee: "Kate Hudson",
          film: "Song Sung Blue",
          img: "nominee/kate-hudson.avif",
          slug: "kate-hudson",
          winner: false,
        },
        {
          nominee: "Renate Reinsve",
          film: "Valor sentimental",
          img: "nominee/renate-reinsve.avif",
          slug: "renate-reinsve",
          winner: false,
        },
        {
          nominee: "Emma Stone",
          film: "Bugonia",
          img: "nominee/emma-stone.avif",
          slug: "emma-stone",
          winner: false,
        },
      ],
    },
    {
      id: "best-supporting-actor",
      name: "Mejor actor de reparto",
      nominations: [
        {
          nominee: "Benicio del Toro",
          film: "Una batalla tras otra",
          img: "nominee/benicio-del-toro.avif",
          slug: "benicio-del-toro",
          winner: false,
        },
        {
          nominee: "Jacob Elordi",
          film: "Frankenstein",
          img: "nominee/jacob-elordi.avif",
          slug: "jacob-elordi",
          winner: false,
        },
        {
          nominee: "Delroy Lindo",
          film: "Sinners",
          img: "nominee/delroy-lindo.avif",
          slug: "delroy-lindo",
          winner: false,
        },
        {
          nominee: "Sean Penn",
          film: "Una batalla tras otra",
          img: "nominee/sean-penn.avif",
          slug: "sean-penn",
          winner: true,
        },
        {
          nominee: "Stellan Skarsgård",
          film: "Valor sentimental",
          img: "nominee/stellan-skarsgard.avif",
          slug: "stellan-skarsgard",
          winner: false,
        },
      ],
    },
    {
      id: "best-supporting-actress",
      name: "Mejor actriz de reparto",
      nominations: [
        {
          nominee: "Elle Fanning",
          film: "Valor sentimental",
          img: "nominee/elle-fanning.avif",
          slug: "elle-fanning",
          winner: false,
        },
        {
          nominee: "Inga Ibsdotter Lilleaas",
          film: "Valor sentimental",
          img: "nominee/inga-ibsdotter-lilleaas.avif",
          slug: "inga-ibsdotter-lilleaas",
          winner: false,
        },
        {
          nominee: "Amy Madigan",
          film: "Weapons",
          img: "nominee/amy-madigan.avif",
          slug: "amy-madigan",
          winner: true,
        },
        {
          nominee: "Wunmi Mosaku",
          film: "Sinners",
          img: "nominee/wunmi-mosaku.avif",
          slug: "wunmi-mosaku",
          winner: false,
        },
        {
          nominee: "Teyana Taylor",
          film: "Una batalla tras otra",
          img: "nominee/teyana--taylor.avif",
          slug: "teyana-taylor",
          winner: false,
        },
      ],
    },
    {
      id: "best-original-screenplay",
      name: "Mejor guion original",
      nominations: [
        {
          film: "Blue Moon",
          nominee: "Robert Kaplow",
          img: "films/blue-moon.avif",
          slug: "blue-moon",
          winner: false,
        },
        {
          film: "Un simple accidente",
          nominee: "Jafar Panahi",
          img: "films/un-simple-accidente.avif",
          slug: "un-simple-accidente",
          winner: false,
        },
        {
          film: "Marty Supreme",
          nominee: "Ronald Bronstein & Josh Safdie",
          img: "films/marty-supreme.avif",
          slug: "marty-supreme",
          winner: false,
        },
        {
          film: "Valor sentimental",
          nominee: "Eskil Vogt & Joachim Trier",
          img: "films/valor-sentimental.avif",
          slug: "valor-sentimental",
          winner: false,
        },
        {
          film: "Sinners",
          nominee: "Ryan Coogler",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: true,
        },
      ],
    },
    {
      id: "best-adapted-screenplay",
      name: "Mejor guion adaptado",
      nominations: [
        {
          film: "Bugonia",
          nominee: "Will Tracy",
          img: "films/bugonia.avif",
          slug: "bugonia",
          winner: false,
        },
        {
          film: "Frankenstein",
          nominee: "Guillermo del Toro",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: false,
        },
        {
          film: "Hamnet",
          nominee: "Chloé Zhao & Maggie O'Farrell",
          img: "films/hamnet.avif",
          slug: "hamnet",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          nominee: "Paul Thomas Anderson",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: true,
        },
        {
          film: "Sueños de trenes",
          nominee: "Clint Bentley & Greg Kwedar",
          img: "films/suenos-de-trenes.avif",
          slug: "suenos-de-trenes",
          winner: false,
        },
      ],
    },
    {
      id: "best-animated-feature",
      name: "Mejor película de animación",
      nominations: [
        { film: "Arco", img: "films/arco.avif", slug: "arco", winner: false },
        { film: "Elio", img: "films/elio.avif", slug: "elio", winner: false },
        {
          film: "Las guerreras K-Pop",
          img: "films/las-guerreras-k-pop.avif",
          slug: "las-guerreras-k-pop",
          winner: true,
        },
        {
          film: "Little Amélie or the Character of Rain",
          img: "films/little-amelie-or-the-character-of-rain.avif",
          slug: "little-amelie-or-the-character-of-rain",
          winner: false,
        },
        {
          film: "Zootropolis 2",
          img: "films/zootropolis-2.avif",
          slug: "zootropolis-2",
          winner: false,
        },
      ],
    },
    {
      id: "best-international-feature",
      name: "Mejor película internacional",
      nominations: [
        {
          film: "Un simple accidente",
          country: "France",
          img: "films/un-simple-accidente.avif",
          slug: "un-simple-accidente",
          winner: false,
        },
        {
          film: "El agente secreto",
          country: "Brazil",
          img: "films/el-agente-secreto.avif",
          slug: "el-agente-secreto",
          winner: false,
        },
        {
          film: "Valor sentimental",
          country: "Norway",
          img: "films/valor-sentimental.avif",
          slug: "valor-sentimental",
          winner: true,
        },
        {
          film: "Sirāt",
          country: "Spain",
          img: "films/siraat.avif",
          slug: "sirat",
          winner: false,
        },
        {
          film: "La voz de Hind Rajab",
          country: "Tunisia",
          img: "films/la-voz-de-hind-rajab.avif",
          slug: "la-voz-de-hind-rajab",
          winner: false,
        },
      ],
    },
    {
      id: "best-documentary-feature",
      name: "Mejor largometraje documental",
      nominations: [
        {
          film: "Alabama: Presos del sistema",
          img: "films/alabama-presos-del-sistema.avif",
          slug: "alabama-presos-del-sistema",
          winner: false,
        },
        {
          film: "Abrázame en la luz",
          img: "films/abrazame-en-la-luz.avif",
          slug: "abrazame-en-la-luz",
          winner: false,
        },
        {
          film: "Cutting Through Rocks",
          img: "films/cutting-through-rocks.avif",
          slug: "cutting-through-rocks",
          winner: false,
        },
        {
          film: "Mr Nobody Against Putin",
          img: "films/mr-nobody-against-putin.avif",
          slug: "mr-nobody-against-putin",
          winner: true,
        },
        {
          film: "La vecina perfecta",
          img: "films/la-vecina-perfecta.avif",
          slug: "la-vecina-perfecta",
          winner: false,
        },
      ],
    },
    {
      id: "best-documentary-short",
      name: "Mejor cortometraje documental",
      nominations: [
        {
          film: "All the Empty Rooms",
          img: "films/all-the-empty-rooms.avif",
          slug: "all-the-empty-rooms",
          winner: true,
        },
        {
          film: "Armed Only with a Camera: The Life and Death of Brent Renaud",
          img: "films/armed-only-with-a-camera.avif",
          slug: "armed-only-with-a-camera-the-life-and-death-of-brent-renaud",
          winner: false,
        },
        {
          film: 'Children No More: "Were and Are Gone"',
          img: "films/children-no-more.avif",
          slug: "children-no-more-were-and-are-gone",
          winner: false,
        },
        {
          film: "The Devil is Busy",
          img: "films/the-devil-is-busy.avif",
          slug: "the-devil-is-busy",
          winner: false,
        },
        {
          film: "Perfectly a Strangeness",
          img: "films/perfectly-a-strangeness.avif",
          slug: "perfectly-a-strangeness",
          winner: false,
        },
      ],
    },
    {
      id: "best-live-action-short",
      name: "Mejor cortometraje",
      nominations: [
        {
          film: "Butcher's Stain",
          img: "films/butchers-stain.avif",
          slug: "butchers-stain",
          winner: false,
        },
        {
          film: "A Friend of Dorothy",
          img: "films/a-friend-of-dorothy.avif",
          slug: "a-friend-of-dorothy",
          winner: false,
        },
        {
          film: "Jane Austen's Period Drama",
          img: "films/jane-austens-period-drama.avif",
          slug: "jane-austens-period-drama",
          winner: false,
        },
        {
          film: "The Singers",
          img: "films/the-singers.avif",
          slug: "the-singers",
          winner: true,
        },
        {
          film: "Two People Exchanging Saliva",
          img: "films/two-people-exchanging-saliva.avif",
          slug: "two-people-exchanging-saliva",
          winner: true,
        },
      ],
    },
    {
      id: "best-animated-short",
      name: "Mejor cortometraje animado",
      nominations: [
        {
          film: "Butterfly",
          img: "films/butterfly.avif",
          slug: "butterfly",
          winner: false,
        },
        {
          film: "Forevergreen",
          img: "films/forevergreen.avif",
          slug: "forevergreen",
          winner: false,
        },
        {
          film: "The Girl Who Cried Pearls",
          img: "films/the-girl-who-cried-pearls.avif",
          slug: "the-girl-who-cried-pearls",
          winner: true,
        },
        {
          film: "Retirement Plan",
          img: "films/retirement-plan.avif",
          slug: "retirement-plan",
          winner: false,
        },
        {
          film: "The Three Sisters",
          img: "films/the-three-sisters.avif",
          slug: "the-three-sisters",
          winner: false,
        },
      ],
    },
    {
      id: "best-original-score",
      name: "Mejor banda sonora original",
      nominations: [
        {
          film: "Bugonia",
          nominee: "Jerskin Fendrix",
          img: "films/bugonia.avif",
          slug: "bugonia",
          winner: false,
        },
        {
          film: "Frankenstein",
          nominee: "Alexandre Desplat",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: false,
        },
        {
          film: "Hamnet",
          nominee: "Max Richter",
          img: "films/hamnet.avif",
          slug: "hamnet",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          nominee: "Jonny Greenwood",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: false,
        },
        {
          film: "Sinners",
          nominee: "Ludwig Göransson",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: true,
        },
      ],
    },
    {
      id: "best-original-song",
      name: "Mejor canción original",
      nominations: [
        {
          song: "Dear Me",
          film: "Diane Warren: Relentless",
          img: "films/diane-warren-relentless.avif",
          slug: "dear-me",
          winner: false,
        },
        {
          song: "Golden",
          film: "Las guerreras K-Pop",
          img: "films/las-guerreras-k-pop.avif",
          slug: "golden",
          winner: true,
        },
        {
          song: "I Lied to You",
          film: "Sinners",
          img: "films/sinners.avif",
          slug: "i-lied-to-you",
          winner: false,
        },
        {
          song: "Sweet Dreams of Joy",
          film: "Viva Verdi!",
          img: "films/viva-verdi.avif",
          slug: "sweet-dreams-of-joy",
          winner: false,
        },
        {
          song: "Train Dreams",
          film: "Sueños de trenes",
          img: "films/sueños-de-trenes.avif",
          slug: "train-dreams",
          winner: false,
        },
      ],
    },
    {
      id: "best-casting",
      name: "Mejor casting",
      nominations: [
        {
          film: "Hamnet",
          nominee: "Nina Gold",
          img: "films/hamnet.avif",
          slug: "hamnet",
          winner: false,
        },
        {
          film: "Marty Supreme",
          nominee: "Jennifer Venditti",
          img: "films/marty-supreme.avif",
          slug: "marty-supreme",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          nominee: "Cassandra Kulukundis",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: true,
        },
        {
          film: "El agente secreto",
          nominee: "Gabriel Domingues",
          img: "films/el-agente-secreto.avif",
          slug: "el-agente-secreto",
          winner: false,
        },
        {
          film: "Sinners",
          nominee: "Francine Maisler",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
      ],
    },
    {
      id: "best-sound",
      name: "Mejor sonido",
      nominations: [
        {
          film: "F1: la película",
          img: "films/f1.avif",
          slug: "f1-la-pelicula",
          winner: true,
        },
        {
          film: "Frankenstein",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: false,
        },
        {
          film: "Sinners",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
        {
          film: "Sirāt",
          img: "films/siraat.avif",
          slug: "sirat",
          winner: false,
        },
      ],
    },
    {
      id: "best-production-design",
      name: "Mejor diseño de producción",
      nominations: [
        {
          film: "Frankenstein",
          productionDesign: "Tamara Deverell",
          setDecoration: "Shane Vieau",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: true,
        },
        {
          film: "Hamnet",
          productionDesign: "Fiona Crombie",
          setDecoration: "Alice Felton",
          img: "films/hamnet.avif",
          slug: "hamnet",
          winner: false,
        },
        {
          film: "Marty Supreme",
          productionDesign: "Jack Fisk",
          setDecoration: "Adam Willis",
          img: "films/marty-supreme.avif",
          slug: "marty-supreme",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          productionDesign: "Florencia Martin",
          setDecoration: "Anthony Carlino",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: false,
        },
        {
          film: "Sinners",
          productionDesign: "Hannah Beachler",
          setDecoration: "Monique Champagne",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
      ],
    },
    {
      id: "best-cinematography",
      name: "Mejor fotografía",
      nominations: [
        {
          film: "Frankenstein",
          nominee: "Dan Laustsen",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: false,
        },
        {
          film: "Marty Supreme",
          nominee: "Darius Khondji",
          img: "films/marty-supreme.avif",
          slug: "marty-supreme",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          nominee: "Michael Bauman",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: false,
        },
        {
          film: "Sinners",
          nominee: "Autumn Durald Arkapaw",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: true,
        },
        {
          film: "Sueños de trenes",
          nominee: "Adolpho Veloso",
          img: "films/sueños-de-trenes.avif",
          slug: "suenos-de-trenes",
          winner: false,
        },
      ],
    },
    {
      id: "best-makeup-hairstyling",
      name: "Mejor maquillaje y peluquería",
      nominations: [
        {
          film: "Frankenstein",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: true,
        },
        {
          film: "Kokuho",
          img: "films/kokuho.avif",
          slug: "kokuho",
          winner: false,
        },
        {
          film: "Sinners",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
        {
          film: "The Smashing Machine",
          img: "films/the-smashing-machine.avif",
          slug: "the-smashing-machine",
          winner: false,
        },
        {
          film: "La hermanastra fea",
          img: "films/la-hermanastra-fea.avif",
          slug: "la-hermanastra-fea",
          winner: false,
        },
      ],
    },
    {
      id: "best-costume-design",
      name: "Mejor diseño de vestuario",
      nominations: [
        {
          film: "Avatar: Fire and Ash",
          nominee: "Deborah L. Scott",
          img: "films/avatar-fire-and-ash.avif",
          slug: "avatar-fire-and-ash",
          winner: false,
        },
        {
          film: "Frankenstein",
          nominee: "Kate Hawley",
          img: "films/frankenstein.avif",
          slug: "frankenstein",
          winner: true,
        },
        {
          film: "Hamnet",
          nominee: "Malgosia Turzanska",
          img: "films/hamnet.avif",
          slug: "hamnet",
          winner: false,
        },
        {
          film: "Marty Supreme",
          nominee: "Miyako Bellizzi",
          img: "films/marty-supreme.avif",
          slug: "marty-supreme",
          winner: false,
        },
        {
          film: "Sinners",
          nominee: "Ruth E. Carter",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
      ],
    },
    {
      id: "best-film-editing",
      name: "Mejor montaje",
      nominations: [
        {
          film: "F1: la película",
          nominee: "Stephen Mirrione",
          img: "films/f1.avif",
          slug: "f1-la-pelicula",
          winner: false,
        },
        {
          film: "Marty Supreme",
          nominee: "Ronald Bronstein & Josh Safdie",
          img: "films/marty-supreme.avif",
          slug: "marty-supreme",
          winner: false,
        },
        {
          film: "Una batalla tras otra",
          nominee: "Andy Jurgensen",
          img: "films/una-batalla-tras-otra.avif",
          slug: "una-batalla-tras-otra",
          winner: true,
        },
        {
          film: "Valor sentimental",
          nominee: "Olivier Bugge Coutté",
          img: "films/valor-sentimental.avif",
          slug: "valor-sentimental",
          winner: false,
        },
        {
          film: "Sinners",
          nominee: "Michael P. Shawver",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
      ],
    },
    {
      id: "best-visual-effects",
      name: "Mejores efectos visuales",
      nominations: [
        {
          film: "Avatar: Fire and Ash",
          img: "films/avatar-fire-and-ash.avif",
          slug: "avatar-fire-and-ash",
          winner: true,
        },
        {
          film: "F1: la película",
          img: "films/f1.avif",
          slug: "f1-la-pelicula",
          winner: false,
        },
        {
          film: "Jurassic World: Rebirth",
          img: "films/jurassic-world-rebirth.avif",
          slug: "jurassic-world-rebirth",
          winner: false,
        },
        {
          film: "The Lost Bus",
          img: "films/the-lost-bus.avif",
          slug: "the-lost-bus",
          winner: false,
        },
        {
          film: "Sinners",
          img: "films/sinners.avif",
          slug: "sinners",
          winner: false,
        },
      ],
    },
  ],
  pool: {
    antonio: [
      {
        category: "best-picture",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-directing",
        slug: "ryan-coogler",
      },
      {
        category: "best-actor",
        slug: "michael-b-jordan",
      },
      {
        category: "best-actress",
        slug: "jessie-buckley",
      },
      {
        category: "best-supporting-actor",
        slug: "delroy-lindo",
      },
      {
        category: "best-supporting-actress",
        slug: "elle-fanning",
      },
      {
        category: "best-original-screenplay",
        slug: "valor-sentimental",
      },
      {
        category: "best-adapted-screenplay",
        slug: "suenos-de-trenes",
      },
      {
        category: "best-animated-feature",
        slug: "las-guerreras-k-pop",
      },
      {
        category: "best-international-feature",
        slug: "valor-sentimental",
      },
      {
        category: "best-documentary-feature",
        slug: "alabama-presos-del-sistema",
      },
      {
        category: "best-documentary-short",
        slug: "armed-only-with-a-camera-the-life-and-death-of-brent-renaud",
      },
      {
        category: "best-live-action-short",
        slug: "the-singers",
      },
      {
        category: "best-animated-short",
        slug: "forevergreen",
      },
      {
        category: "best-original-score",
        slug: "sinners",
      },
      {
        category: "best-original-song",
        slug: "golden",
      },
      {
        category: "best-casting",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-sound",
        slug: "sirat",
      },
      {
        category: "best-production-design",
        slug: "sinners",
      },
      {
        category: "best-cinematography",
        slug: "suenos-de-trenes",
      },
      {
        category: "best-makeup-hairstyling",
        slug: "sinners",
      },
      {
        category: "best-costume-design",
        slug: "hamnet",
      },
      {
        category: "best-film-editing",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-visual-effects",
        slug: "sinners",
      },
    ],
    tonyi: [
      {
        category: "best-picture",
        slug: "hamnet",
      },
      {
        category: "best-directing",
        slug: "paul-thomas-anderson",
      },
      {
        category: "best-actor",
        slug: "michael-b-jordan",
      },
      {
        category: "best-actress",
        slug: "jessie-buckley",
      },
      {
        category: "best-supporting-actor",
        slug: "benicio-del-toro",
      },
      {
        category: "best-supporting-actress",
        slug: "teyana-taylor",
      },
      {
        category: "best-original-screenplay",
        slug: "sinners",
      },
      {
        category: "best-adapted-screenplay",
        slug: "hamnet",
      },
      {
        category: "best-animated-feature",
        slug: "elio",
      },
      {
        category: "best-international-feature",
        slug: "sirat",
      },
      {
        category: "best-documentary-feature",
        slug: "alabama-presos-del-sistema",
      },
      {
        category: "best-documentary-short",
        slug: "armed-only-with-a-camera-the-life-and-death-of-brent-renaud",
      },
      {
        category: "best-live-action-short",
        slug: "the-singers",
      },
      {
        category: "best-animated-short",
        slug: "the-girl-who-cried-pearls",
      },
      {
        category: "best-original-score",
        slug: "sinners",
      },
      {
        category: "best-original-song",
        slug: "golden",
      },
      {
        category: "best-casting",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-sound",
        slug: "sirat",
      },
      {
        category: "best-production-design",
        slug: "frankenstein",
      },
      {
        category: "best-cinematography",
        slug: "frankenstein",
      },
      {
        category: "best-makeup-hairstyling",
        slug: "sinners",
      },
      {
        category: "best-costume-design",
        slug: "avatar-fire-and-ash",
      },
      {
        category: "best-film-editing",
        slug: "sinners",
      },
      {
        category: "best-visual-effects",
        slug: "avatar-fire-and-ash",
      },
    ],
    ruth: [
      {
        category: "best-picture",
        slug: "hamnet",
      },
      {
        category: "best-directing",
        slug: "chloe-zhao",
      },
      {
        category: "best-actor",
        slug: "michael-b-jordan",
      },
      {
        category: "best-actress",
        slug: "jessie-buckley",
      },
      {
        category: "best-supporting-actor",
        slug: "sean-penn",
      },
      {
        category: "best-supporting-actress",
        slug: "amy-madigan",
      },
      {
        category: "best-original-screenplay",
        slug: "sinners",
      },
      {
        category: "best-adapted-screenplay",
        slug: "hamnet",
      },
      {
        category: "best-animated-feature",
        slug: "las-guerreras-k-pop",
      },
      {
        category: "best-international-feature",
        slug: "valor-sentimental",
      },
      {
        category: "best-documentary-feature",
        slug: "la-vecina-perfecta",
      },
      {
        category: "best-documentary-short",
        slug: "all-the-empty-rooms",
      },
      {
        category: "best-live-action-short",
        slug: "butchers-stain",
      },
      {
        category: "best-animated-short",
        slug: "the-girl-who-cried-pearls",
      },
      {
        category: "best-original-score",
        slug: "sinners",
      },
      {
        category: "best-original-song",
        slug: "golden",
      },
      {
        category: "best-casting",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-sound",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-production-design",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-cinematography",
        slug: "frankenstein",
      },
      {
        category: "best-makeup-hairstyling",
        slug: "frankenstein",
      },
      {
        category: "best-costume-design",
        slug: "frankenstein",
      },
      {
        category: "best-film-editing",
        slug: "una-batalla-tras-otra",
      },
      {
        category: "best-visual-effects",
        slug: "avatar-fire-and-ash",
      },
    ],
    sara: [
      {
        category: "best-picture",
        slug: "sinners",
      },
      {
        category: "best-directing",
        slug: "chloe-zhao",
      },
      {
        category: "best-actor",
        slug: "michael-b-jordan",
      },
      {
        category: "best-actress",
        slug: "jessie-buckley",
      },
      {
        category: "best-supporting-actor",
        slug: "stellan-skarsgard",
      },
      {
        category: "best-supporting-actress",
        slug: "wunmi-mosaku",
      },
      {
        category: "best-original-screenplay",
        slug: "sinners",
      },
      {
        category: "best-adapted-screenplay",
        slug: "hamnet",
      },
      {
        category: "best-animated-feature",
        slug: "little-amelie-or-the-character-of-rain",
      },
      {
        category: "best-international-feature",
        slug: "valor-sentimental",
      },
      {
        category: "best-documentary-feature",
        slug: "alabama-presos-del-sistema",
      },
      {
        category: "best-documentary-short",
        slug: "armed-only-with-a-camera-the-life-and-death-of-brent-renaud",
      },
      {
        category: "best-live-action-short",
        slug: "a-friend-of-dorothy",
      },
      {
        category: "best-animated-short",
        slug: "butterfly",
      },
      {
        category: "best-original-score",
        slug: "hamnet",
      },
      {
        category: "best-original-song",
        slug: "golden",
      },
      {
        category: "best-casting",
        slug: "hamnet",
      },
      {
        category: "best-sound",
        slug: "sirat",
      },
      {
        category: "best-production-design",
        slug: "sinners",
      },
      {
        category: "best-cinematography",
        slug: "suenos-de-trenes",
      },
      {
        category: "best-makeup-hairstyling",
        slug: "frankenstein",
      },
      {
        category: "best-costume-design",
        slug: "sinners",
      },
      {
        category: "best-film-editing",
        slug: "sinners",
      },
      {
        category: "best-visual-effects",
        slug: "avatar-fire-and-ash",
      },
    ],
  },
};

export default oscars2026Nominations;
