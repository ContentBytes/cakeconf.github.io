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
    category: "UX writing",
    title: "Collaborative content design with a user in mind",
    speaker: "Tomek Prus",
    time: `12:15${'\u2013'}12:45`,
    url: BioAndAbstract[1]["url"],
  },
  {
    category: "UX writing",
    title: "Three voices, one feature. How words turn options into actions",
    speaker: "Wojtek Aleksander",
    time: `12:45${'\u2013'}13:15`,
    url: BioAndAbstract[0]["url"],
  },
  {
    title: "Lunch break",
    time: `13:15${'\u2013'}14:15`,
  },
  {
    category: "UX writing",
    title: "Content design for onboarding - Only one chance to make a first impression",
    speaker: "Pieterjan Benoit",
    time: `14:15${'\u2013'}14:35`,
    url: BioAndAbstract[2]["url"],
    },
  {
    category: "Accessibility",
    title: "Accessible web content: things you might not have thought about",
    speaker: "Wojtek Kutyła",
    time: `14:35${'\u2013'}15:15`,
    url: BioAndAbstract[3]["url"],
  },
  {
    category: "AI",
    title: "The readers you never see",
    speaker: "Magdalena Michalak",
    time: `15:15${'\u2013'}15:35`,
    url: BioAndAbstract[10]["url"],
  },
  {
    title: "Coffee break",
    time: `15:35${'\u2013'}16:05`,
  },
  {
    category: "Documentation",
    title: "Open source for technical writers: does it even make sense?",
    speaker: "Łukasz Górnicki",
    time: `16:05${'\u2013'}16:35`,
    url: BioAndAbstract[4]["url"],
  },
  {
    category: "Documentation", 
    title: "Docs-as-code vs. DITA - methodologies and processes",
    speaker: "Katarzyna Kołtun",
    time: `16:35${'\u2013'}16:55`,
    url: BioAndAbstract[5]["url"],
  },
  {
    category: "Management",
    title: "Feedback is everything",
    speaker: "Aleksandra Wieczorek-Konieczko",
    time: `16:55${'\u2013'}17:25`,
    url: BioAndAbstract[6]["url"],
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
    category: "AI",
    title: "Beyond prompts: how content professionals are preparing content for AI integration",
    speaker: "Lance Cummings",
    time: `12:00${'\u2013'}12:40`,
    url: BioAndAbstract[7]["url"],
  },
  {
    category: "Management",
    title: "Metrics in Content Design. Numbers are probably the most important words",
    speaker: "Sergio Valero Notari",
    time: `12:40${'\u2013'}13:00`,
    url: BioAndAbstract[8]["url"],
  },
  {
    title: "Lunch break",
    time: `13:00${'\u2013'}14:00`,
  },
  {
    category: "Accessibility",
    title: "How can content design support accessibility?",
    speaker: "Anna Dulny-Leszczyńska",
    time: `14:00${'\u2013'}14:20`,
    url: BioAndAbstract[9]["url"],
  },
  {
    category: "UX writing",
    title: "From local voice to global choice: Challenges of designing content across borders",
    speaker: "Nachu Herrera",
    time: `14:20${'\u2013'}14:50`,
    url: BioAndAbstract[11]["url"],
  },
  {
    category: "Accessibility",
    title: "Instant accessibility: what happens when AI automates inclusion",
    speaker: "Sara Grądziel",
    time: `14:50${'\u2013'}15:10`,
    url: BioAndAbstract[19]["url"],
  },
  {
    title: "Coffee break",
    time: `15:10${'\u2013'}15:40`,
  },
  {
    category: "Storytelling",
    title: "How to tell the stories about your creative brand? 5 rules of brand communication in 2025",
    speaker: "Dagmara Szol",
    time: `15:40${'\u2013'}16:10`,
    url: BioAndAbstract[12]["url"],
  },
  {
    category: "Documentation",
    title: "Release note: A technical writing genre of its own?",
    speaker: "Adam Turlej",
    time: `16:10${'\u2013'}16:30`,
    url: BioAndAbstract[18]["url"],
  },
  {
    title: "Closing remarks",
    time: `16:30${'\u2013'}16:45`,
  },
];