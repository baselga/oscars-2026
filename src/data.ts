export type OscarsData = {
  edition: number;
  year: number;
  ceremonyDate: string;
  source: string;
  categories: Category[];
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
};

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
        { film: "Bugonia", img: "films/bugonia.jpg", slug: "bugonia" },
        {
          film: "F1: la película",
          img: "films/f1.jpg",
          slug: "f1-la-pelicula",
        },
        {
          film: "Frankenstein",
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        { film: "Hamnet", img: "films/hamnet.jpg", slug: "hamnet" },
        {
          film: "Marty Supreme",
          img: "films/marty-supreme.jpg",
          slug: "marty-supreme",
        },
        {
          film: "Una batalla tras otra",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        {
          film: "El agente secreto",
          img: "films/el-agente-secreto.jpg",
          slug: "el-agente-secreto",
        },
        {
          film: "Valor sentimental",
          img: "films/valor-sentimental.jpg",
          slug: "valor-sentimental",
        },
        { film: "Sinners", img: "films/sinners.jpg", slug: "sinners" },
        {
          film: "Sueños de trenes",
          img: "films/suenos-de-trenes.jpg",
          slug: "suenos-de-trenes",
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
          img: "nominee/chloe-zhao.webp",
          slug: "chloe-zhao",
        },
        {
          nominee: "Josh Safdie",
          film: "Marty Supreme",
          img: "nominee/josh-safdie.webp",
          slug: "josh-safdie",
        },
        {
          nominee: "Paul Thomas Anderson",
          film: "Una batalla tras otra",
          img: "nominee/paul-thomas-anderson.jpg",
          slug: "paul-thomas-anderson",
        },
        {
          nominee: "Joachim Trier",
          film: "Valor sentimental",
          img: "nominee/joachim-trier.jpg",
          slug: "joachim-trier",
        },
        {
          nominee: "Ryan Coogler",
          film: "Sinners",
          img: "nominee/ryan-coogler.jpg",
          slug: "ryan-coogler",
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
          img: "nominee/timothee-chalamet.webp",
          slug: "timothee-chalamet",
        },
        {
          nominee: "Leonardo DiCaprio",
          film: "Una batalla tras otra",
          img: "nominee/leonardo-dicaprio.jpg",
          slug: "leonardo-dicaprio",
        },
        {
          nominee: "Ethan Hawke",
          film: "Blue Moon",
          img: "nominee/ethan-hawke.jpg",
          slug: "ethan-hawke",
        },
        {
          nominee: "Michael B. Jordan",
          film: "Sinners",
          img: "nominee/michael-b-jordan.jpg",
          slug: "michael-b-jordan",
        },
        {
          nominee: "Wagner Moura",
          film: "El agente secreto",
          img: "nominee/wagner-moura.jpg",
          slug: "wagner-moura",
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
          img: "nominee/jessie-buckley.jpg",
          slug: "jessie-buckley",
        },
        {
          nominee: "Rose Byrne",
          film: "If I Had Legs I'd Kick You",
          img: "nominee/rose-byrne.jpg",
          slug: "rose-byrne",
        },
        {
          nominee: "Kate Hudson",
          film: "Song Sung Blue",
          img: "nominee/kate-hudson.jpg",
          slug: "kate-hudson",
        },
        {
          nominee: "Renate Reinsve",
          film: "Valor sentimental",
          img: "nominee/renate-reinsve.jpg",
          slug: "renate-reinsve",
        },
        {
          nominee: "Emma Stone",
          film: "Bugonia",
          img: "nominee/emma-stone.jpg",
          slug: "emma-stone",
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
          img: "nominee/benicio-del-toro.jpg",
          slug: "benicio-del-toro",
        },
        {
          nominee: "Jacob Elordi",
          film: "Frankenstein",
          img: "nominee/jacob-elordi.jpg",
          slug: "jacob-elordi",
        },
        {
          nominee: "Delroy Lindo",
          film: "Sinners",
          img: "nominee/delroy-lindo.jpg",
          slug: "delroy-lindo",
        },
        {
          nominee: "Sean Penn",
          film: "Una batalla tras otra",
          img: "nominee/sean-penn.jpg",
          slug: "sean-penn",
        },
        {
          nominee: "Stellan Skarsgård",
          film: "Valor sentimental",
          img: "nominee/stellan-skarsgard.jpg",
          slug: "stellan-skarsgard",
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
          img: "nominee/elle-fanning.jpg",
          slug: "elle-fanning",
        },
        {
          nominee: "Inga Ibsdotter Lilleaas",
          film: "Valor sentimental",
          img: "nominee/inga-ibsdotter-lilleaas.jpg",
          slug: "inga-ibsdotter-lilleaas",
        },
        {
          nominee: "Amy Madigan",
          film: "Weapons",
          img: "nominee/amy-madigan.jpg",
          slug: "amy-madigan",
        },
        {
          nominee: "Wunmi Mosaku",
          film: "Sinners",
          img: "nominee/wunmi-mosaku.jpg",
          slug: "wunmi-mosaku",
        },
        {
          nominee: "Teyana Taylor",
          film: "Una batalla tras otra",
          img: "nominee/teyana--taylor.jpg",
          slug: "teyana-taylor",
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
          img: "films/blue-moon.jpg",
          slug: "blue-moon",
        },
        {
          film: "Un simple accidente",
          nominee: "Jafar Panahi",
          img: "films/un-simple-accidente.jpg",
          slug: "un-simple-accidente",
        },
        {
          film: "Marty Supreme",
          nominee: "Ronald Bronstein & Josh Safdie",
          img: "films/marty-supreme.jpg",
          slug: "marty-supreme",
        },
        {
          film: "Valor sentimental",
          nominee: "Eskil Vogt & Joachim Trier",
          img: "films/valor-sentimental.jpg",
          slug: "valor-sentimental",
        },
        {
          film: "Sinners",
          nominee: "Ryan Coogler",
          img: "films/sinners.jpg",
          slug: "sinners",
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
          img: "films/bugonia.jpg",
          slug: "bugonia",
        },
        {
          film: "Frankenstein",
          nominee: "Guillermo del Toro",
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        {
          film: "Hamnet",
          nominee: "Chloé Zhao & Maggie O'Farrell",
          img: "films/hamnet.jpg",
          slug: "hamnet",
        },
        {
          film: "Una batalla tras otra",
          nominee: "Paul Thomas Anderson",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        {
          film: "Sueños de trenes",
          nominee: "Clint Bentley & Greg Kwedar",
          img: "films/suenos-de-trenes.jpg",
          slug: "suenos-de-trenes",
        },
      ],
    },
    {
      id: "best-animated-feature",
      name: "Mejor película de animación",
      nominations: [
        { film: "Arco", img: "films/arco.jpg", slug: "arco" },
        { film: "Elio", img: "films/elio.jpg", slug: "elio" },
        {
          film: "Las guerreras K-Pop",
          img: "films/las-guerreras-k-pop.jpg",
          slug: "las-guerreras-k-pop",
        },
        {
          film: "Little Amélie or the Character of Rain",
          img: "films/little-amelie-or-the-character-of-rain.jpg",
          slug: "little-amelie-or-the-character-of-rain",
        },
        {
          film: "Zootropolis 2",
          img: "films/zootropolis-2.jpg",
          slug: "zootropolis-2",
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
          img: "films/un-simple-accidente.jpg",
          slug: "un-simple-accidente",
        },
        {
          film: "El agente secreto",
          country: "Brazil",
          img: "films/el-agente-secreto.jpg",
          slug: "el-agente-secreto",
        },
        {
          film: "Valor sentimental",
          country: "Norway",
          img: "films/valor-sentimental.jpg",
          slug: "valor-sentimental",
        },
        {
          film: "Sirāt",
          country: "Spain",
          img: "films/siraat.jpg",
          slug: "sirat",
        },
        {
          film: "La voz de Hind Rajab",
          country: "Tunisia",
          img: "films/la-voz-de-hind-rajab.jpg",
          slug: "la-voz-de-hind-rajab",
        },
      ],
    },
    {
      id: "best-documentary-feature",
      name: "Mejor largometraje documental",
      nominations: [
        {
          film: "Alabama: Presos del sistema",
          img: "films/alabama-presos-del-sistema.jpg",
          slug: "alabama-presos-del-sistema",
        },
        {
          film: "Abrázame en la luz",
          img: "films/abrazame-en-la-luz.jpg",
          slug: "abrazame-en-la-luz",
        },
        {
          film: "Cutting Through Rocks",
          img: "films/cutting-through-rocks.jpg",
          slug: "cutting-through-rocks",
        },
        {
          film: "Mr Nobody Against Putin",
          img: "films/mr-nobody-against-putin.jpg",
          slug: "mr-nobody-against-putin",
        },
        {
          film: "La vecina perfecta",
          img: "films/la-vecina-perfecta.jpg",
          slug: "la-vecina-perfecta",
        },
      ],
    },
    {
      id: "best-documentary-short",
      name: "Mejor cortometraje documental",
      nominations: [
        {
          film: "All the Empty Rooms",
          img: "films/all-the-empty-rooms.jpg",
          slug: "all-the-empty-rooms",
        },
        {
          film: "Armed Only with a Camera: The Life and Death of Brent Renaud",
          img: "films/armed-only-with-a-camera.jpg",
          slug: "armed-only-with-a-camera-the-life-and-death-of-brent-renaud",
        },
        {
          film: 'Children No More: "Were and Are Gone"',
          img: "films/children-no-more.jpg",
          slug: "children-no-more-were-and-are-gone",
        },
        {
          film: "The Devil is Busy",
          img: "films/the-devil-is-busy.jpg",
          slug: "the-devil-is-busy",
        },
        {
          film: "Perfectly a Strangeness",
          img: "films/perfectly-a-strangeness.jpg",
          slug: "perfectly-a-strangeness",
        },
      ],
    },
    {
      id: "best-live-action-short",
      name: "Mejor cortometraje",
      nominations: [
        {
          film: "Butcher's Stain",
          img: "films/butchers-stain.jpg",
          slug: "butchers-stain",
        },
        {
          film: "A Friend of Dorothy",
          img: "films/a-friend-of-dorothy.jpg",
          slug: "a-friend-of-dorothy",
        },
        {
          film: "Jane Austen's Period Drama",
          img: "films/jane-austens-period-drama.jpg",
          slug: "jane-austens-period-drama",
        },
        {
          film: "The Singers",
          img: "films/the-singers.jpg",
          slug: "the-singers",
        },
        {
          film: "Two People Exchanging Saliva",
          img: "films/two-people-exchanging-saliva.jpg",
          slug: "two-people-exchanging-saliva",
        },
      ],
    },
    {
      id: "best-animated-short",
      name: "Mejor cortometraje animado",
      nominations: [
        { film: "Butterfly", img: "films/butterfly.jpg", slug: "butterfly" },
        {
          film: "Forevergreen",
          img: "films/forevergreen.jpg",
          slug: "forevergreen",
        },
        {
          film: "The Girl Who Cried Pearls",
          img: "films/the-girl-who-cried-pearls.jpg",
          slug: "the-girl-who-cried-pearls",
        },
        {
          film: "Retirement Plan",
          img: "films/retirement-plan.jpg",
          slug: "retirement-plan",
        },
        {
          film: "The Three Sisters",
          img: "films/the-three-sisters.jpg",
          slug: "the-three-sisters",
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
          img: "films/bugonia.jpg",
          slug: "bugonia",
        },
        {
          film: "Frankenstein",
          nominee: "Alexandre Desplat",
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        {
          film: "Hamnet",
          nominee: "Max Richter",
          img: "films/hamnet.jpg",
          slug: "hamnet",
        },
        {
          film: "Una batalla tras otra",
          nominee: "Jonny Greenwood",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        {
          film: "Sinners",
          nominee: "Ludwig Göransson",
          img: "films/sinners.jpg",
          slug: "sinners",
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
          img: "films/diane-warren-relentless.jpg",
          slug: "dear-me",
        },
        {
          song: "Golden",
          film: "Las guerreras K-Pop",
          img: "films/las-guerreras-k-pop.jpg",
          slug: "golden",
        },
        {
          song: "I Lied to You",
          film: "Sinners",
          img: "films/sinners.jpg",
          slug: "i-lied-to-you",
        },
        {
          song: "Sweet Dreams of Joy",
          film: "Viva Verdi!",
          img: "films/viva-verdi.jpg",
          slug: "sweet-dreams-of-joy",
        },
        {
          song: "Train Dreams",
          film: "Sueños de trenes",
          img: "films/sueños-de-trenes.jpg",
          slug: "train-dreams",
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
          img: "films/hamnet.jpg",
          slug: "hamnet",
        },
        {
          film: "Marty Supreme",
          nominee: "Jennifer Venditti",
          img: "films/marty-supreme.jpg",
          slug: "marty-supreme",
        },
        {
          film: "Una batalla tras otra",
          nominee: "Cassandra Kulukundis",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        {
          film: "El agente secreto",
          nominee: "Gabriel Domingues",
          img: "films/el-agente-secreto.jpg",
          slug: "el-agente-secreto",
        },
        {
          film: "Sinners",
          nominee: "Francine Maisler",
          img: "films/sinners.jpg",
          slug: "sinners",
        },
      ],
    },
    {
      id: "best-sound",
      name: "Mejor sonido",
      nominations: [
        {
          film: "F1: la película",
          img: "films/f1.jpg",
          slug: "f1-la-pelicula",
        },
        {
          film: "Frankenstein",
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        {
          film: "Una batalla tras otra",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        { film: "Sinners", img: "films/sinners.jpg", slug: "sinners" },
        { film: "Sirāt", img: "films/siraat.jpg", slug: "sirat" },
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
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        {
          film: "Hamnet",
          productionDesign: "Fiona Crombie",
          setDecoration: "Alice Felton",
          img: "films/hamnet.jpg",
          slug: "hamnet",
        },
        {
          film: "Marty Supreme",
          productionDesign: "Jack Fisk",
          setDecoration: "Adam Willis",
          img: "films/marty-supreme.jpg",
          slug: "marty-supreme",
        },
        {
          film: "Una batalla tras otra",
          productionDesign: "Florencia Martin",
          setDecoration: "Anthony Carlino",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        {
          film: "Sinners",
          productionDesign: "Hannah Beachler",
          setDecoration: "Monique Champagne",
          img: "films/sinners.jpg",
          slug: "sinners",
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
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        {
          film: "Marty Supreme",
          nominee: "Darius Khondji",
          img: "films/marty-supreme.jpg",
          slug: "marty-supreme",
        },
        {
          film: "Una batalla tras otra",
          nominee: "Michael Bauman",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        {
          film: "Sinners",
          nominee: "Autumn Durald Arkapaw",
          img: "films/sinners.jpg",
          slug: "sinners",
        },
        {
          film: "Sueños de trenes",
          nominee: "Adolpho Veloso",
          img: "films/sueños-de-trenes.jpg",
          slug: "suenos-de-trenes",
        },
      ],
    },
    {
      id: "best-makeup-hairstyling",
      name: "Mejor maquillaje y peluquería",
      nominations: [
        {
          film: "Frankenstein",
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        { film: "Kokuho", img: "films/kokuho.jpg", slug: "kokuho" },
        { film: "Sinners", img: "films/sinners.jpg", slug: "sinners" },
        {
          film: "The Smashing Machine",
          img: "films/the-smashing-machine.jpg",
          slug: "the-smashing-machine",
        },
        {
          film: "La hermanastra fea",
          img: "films/la-hermanastra-fea.jpg",
          slug: "la-hermanastra-fea",
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
          img: "films/avatar-fire-and-ash.jpg",
          slug: "avatar-fire-and-ash",
        },
        {
          film: "Frankenstein",
          nominee: "Kate Hawley",
          img: "films/frankenstein.jpg",
          slug: "frankenstein",
        },
        {
          film: "Hamnet",
          nominee: "Malgosia Turzanska",
          img: "films/hamnet.jpg",
          slug: "hamnet",
        },
        {
          film: "Marty Supreme",
          nominee: "Miyako Bellizzi",
          img: "films/marty-supreme.jpg",
          slug: "marty-supreme",
        },
        {
          film: "Sinners",
          nominee: "Ruth E. Carter",
          img: "films/sinners.jpg",
          slug: "sinners",
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
          img: "films/f1.jpg",
          slug: "f1-la-pelicula",
        },
        {
          film: "Marty Supreme",
          nominee: "Ronald Bronstein & Josh Safdie",
          img: "films/marty-supreme.jpg",
          slug: "marty-supreme",
        },
        {
          film: "Una batalla tras otra",
          nominee: "Andy Jurgensen",
          img: "films/una-batalla-tras-otra.jpg",
          slug: "una-batalla-tras-otra",
        },
        {
          film: "Valor sentimental",
          nominee: "Olivier Bugge Coutté",
          img: "films/valor-sentimental.jpg",
          slug: "valor-sentimental",
        },
        {
          film: "Sinners",
          nominee: "Michael P. Shawver",
          img: "films/sinners.jpg",
          slug: "sinners",
        },
      ],
    },
    {
      id: "best-visual-effects",
      name: "Mejores efectos visuales",
      nominations: [
        {
          film: "Avatar: Fire and Ash",
          img: "films/avatar-fire-and-ash.jpg",
          slug: "avatar-fire-and-ash",
        },
        {
          film: "F1: la película",
          img: "films/f1.jpg",
          slug: "f1-la-pelicula",
        },
        {
          film: "Jurassic World: Rebirth",
          img: "films/jurassic-world-rebirth.jpg",
          slug: "jurassic-world-rebirth",
        },
        {
          film: "The Lost Bus",
          img: "films/the-lost-bus.jpg",
          slug: "the-lost-bus",
        },
        { film: "Sinners", img: "films/sinners.jpg", slug: "sinners" },
      ],
    },
  ],
};

export default oscars2026Nominations;
