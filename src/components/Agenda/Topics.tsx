import { CardProps } from '.';
import { BioAndAbstract } from './SpeakerDetails';

export const AgendaItems: CardProps[] = [
  /* Day 1 */
  {
    category: "Documentation",
    title: "Workshop",
    speaker: "Details coming soon",
    time: `9:30${'\u2013'}11:30`,
  },
  {
    category: "Accessibility",
    title: "Workshop",
    speaker: "Details coming soon",
    time: `9:30${'\u2013'}11:30`,
  },
  {
    title: "Opening remarks",
    time: `12:00${'\u2013'}12:15`,
  },
  {
    category: BioAndAbstract[1]["category"],
    title: BioAndAbstract[1]["title"],
    speaker: "Tomek Prus",
    time: `12:15${'\u2013'}12:45`,
    url: BioAndAbstract[1]["url"],
  },
  {
    category: BioAndAbstract[0]["category"],
    title: BioAndAbstract[0]["title"],
    speaker: "Wojtek Aleksander",
    time: `12:45${'\u2013'}13:15`,
    url: BioAndAbstract[0]["url"],
  },
  {
    title: "Lunch break",
    time: `13:15${'\u2013'}14:15`,
  },
  {
    category: BioAndAbstract[10]["category"],
    title: BioAndAbstract[10]["title"],
    speaker: "Magdalena Michalak",
    time: `14:15${'\u2013'}14:35`,
    url: BioAndAbstract[10]["url"],
  },
  {
    category: BioAndAbstract[3]["category"],
    title: BioAndAbstract[3]["title"],
    speaker: "Wojtek Kutyła",
    time: `14:35${'\u2013'}15:15`,
    url: BioAndAbstract[3]["url"],
  },
  {
    category: BioAndAbstract[2]["category"],
    title: BioAndAbstract[2]["title"],
    speaker: "Pieterjan Benoit",
    time: `15:15${'\u2013'}15:35`,
    url: BioAndAbstract[2]["url"],
  },
  {
    title: "Coffee break",
    time: `15:35${'\u2013'}16:05`,
  },
    {
    category: BioAndAbstract[4]["category"],
    title: BioAndAbstract[4]["title"],
    speaker: "Łukasz Górnicki",
    time: `16:05${'\u2013'}16:35`, 
    url: BioAndAbstract[4]["url"],
  },
  {
    category: BioAndAbstract[6]["category"],
    title: BioAndAbstract[6]["title"],
    speaker: "Aleksandra Wieczorek-Konieczko",
    time: `16:35${'\u2013'}17:05`,
    url: BioAndAbstract[6]["url"],
  },
  {
    category: BioAndAbstract[5]["category"],
    title: BioAndAbstract[5]["title"],
    speaker: "Katarzyna Kołtun",
    time: `17:05${'\u2013'}17:25`,
    url: BioAndAbstract[5]["url"],
  },
  /* Day 2 */
  {
    category: "Documentation",
    title: "Workshop 1",
    speaker: "Details soon!",
    time: `9:30${'\u2013'}11:30`,
  },
  {
    category: "Accessibility",
    title: "Workshop",
    speaker: "Details soon!",
    time: `9:30${'\u2013'}11:30`,
  },
  {
    category: BioAndAbstract[7]["category"],
    title: BioAndAbstract[7]["title"],
    speaker: "Lance Cummings",
    time: `12:00${'\u2013'}12:40`,
    url: BioAndAbstract[7]["url"],
  },
  {
    category: BioAndAbstract[8]["category"],
    title: BioAndAbstract[8]["title"],
    speaker: "Sergio Valero Notari",
    time: `12:40${'\u2013'}13:00`,
    url: BioAndAbstract[8]["url"],
  },
  {
    title: "Lunch break",
    time: `13:00${'\u2013'}14:00`,
  },
  {
    category: BioAndAbstract[9]["category"],
    title: BioAndAbstract[9]["title"],
    speaker: "Anna Dulny-Leszczyńska",
    time: `14:00${'\u2013'}14:20`,
    url: BioAndAbstract[9]["url"],
  },
  {
    category: BioAndAbstract[11]["category"],
    title: BioAndAbstract[11]["title"],
    speaker: "Nachu Herrera",
    time: `14:20${'\u2013'}14:50`,
    url: BioAndAbstract[11]["url"],
  },
  {
    category: BioAndAbstract[19]["category"],
    title: BioAndAbstract[19]["title"],
    speaker: "Sara Grądziel",
    time: `14:50${'\u2013'}15:10`,
    url: BioAndAbstract[19]["url"],
  },
  {
    title: "Coffee break",
    time: `15:10${'\u2013'}15:40`,
  },
  {
    category: BioAndAbstract[12]["category"],
    title: BioAndAbstract[12]["title"],
    speaker: "Dagmara Szol",
    time: `15:40${'\u2013'}16:10`,
    url: BioAndAbstract[12]["url"],
  },
  {
    category: BioAndAbstract[18]["category"],
    title: BioAndAbstract[18]["title"],
    speaker: "Adam Turlej",
    time: `16:10${'\u2013'}16:30`,
    url: BioAndAbstract[18]["url"],
  },
  {
    title: "Closing remarks",
    time: `16:30${'\u2013'}16:45`,
  },
];