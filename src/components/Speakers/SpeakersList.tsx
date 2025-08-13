import { BioAndAbstract } from '../Agenda/SpeakerDetails';

export type SpeakerItem = {
  picture: string;
  name: string;
  desc: React.ReactNode;
  linkedIn: string;
  hover: Boolean;
  url?: string;
};

export const SpeakerList: SpeakerItem[] = [
  {
    picture: 'img/speakers/nachu.png',
    name: 'Nachu Herrera',
    desc: (
      <>
        UX content <br /> designer
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/herreranadiam',
    hover: true,
    url: 'agenda/nachu-herrera',
  },
  {
    picture: 'img/speakers/dariusz-drezno.png',
    name: 'Dariusz Drezno',
    desc: 'Speaker, trainer, accessibility expert',
    linkedIn: 'https://www.linkedin.com/in/dariusz-drezno',
    hover: true,
    url: 'agenda/dariusz-drezno',
  },
  {
    picture: 'img/speakers/lukasz-gornicki.png',
    name: 'Łukasz Górnicki',
    desc: 'Consultant, speaker, trainer, open source expert',
    linkedIn: BioAndAbstract[4]['linkedIn'],
    hover: true,
    url: BioAndAbstract[4]['url'],
  },
  {
    picture: 'img/speakers/wojtek-aleksander.png',
    name: 'Wojtek Aleksander',
    desc: 'Content designer, UX writing trainer, published author',
    linkedIn: BioAndAbstract[0]['linkedIn'],
    hover: true,
    url: BioAndAbstract[0]['url'],
  },
  {
    picture: 'img/speakers/empty-card.png',
    name: null,
    desc: null,
    linkedIn: null,
    hover: false,
  },
  {
    picture: 'img/speakers/tomek-prus.png',
    name: 'Tomek Prus',
    desc: 'Technical writer, content designer, UX writer',
    linkedIn: BioAndAbstract[1]['linkedIn'],
    hover: true,
    url: BioAndAbstract[1]['url'],
  },
  {
    picture: 'img/speakers/wojtek-kutyla.png',
    name: 'Wojtek Kutyła',
    desc: 'Web accessibility specialist, WCAG auditor',
    linkedIn: BioAndAbstract[3]['linkedIn'],
    hover: true,
    url: BioAndAbstract[3]['url'],
  },
  {
    picture: 'img/speakers/ola-wieczorek.png',
    name: 'Ola Wieczorek-Konieczko',
    desc: 'Technical writer, documentation strategist',
    linkedIn: BioAndAbstract[6]['linkedIn'],
    hover: true,
    url: BioAndAbstract[6]['url'],
  },
  {
    picture: 'img/speakers/sergio.png',
    name: 'Sergio Valero Notari',
    desc: 'Content design manager, UX writing teacher',
    linkedIn: 'https://www.linkedin.com/in/servalnot/',
    hover: true,
    url: 'agenda/sergio-valero-notari',
  },
  {
    picture: 'img/speakers/michal-skowron.png',
    name: 'Michał Skowron',
    desc: 'Doc tools developer, podcaster',
    linkedIn: 'https://www.linkedin.com/in/michalskowron',
    hover: true,
    url: 'agenda/michal-skowron-pawel-kowaluk',
  },
  {
    picture: 'img/speakers/empty-card.png',
    name: null,
    desc: null,
    linkedIn: null,
    hover: false,
  },
  {
    picture: 'img/speakers/pawel-kowaluk.png',
    name: 'Paweł Kowaluk',
    desc: 'ContentOps engineer, podcaster, technical writer',
    linkedIn: 'https://www.linkedin.com/in/pawel-kowaluk',
    hover: true,
    url: 'agenda/michal-skowron-pawel-kowaluk',
  },
  {
    picture: 'img/speakers/marcin-krzanicki.png',
    name: 'Marcin Krzanicki',
    desc: 'UX designer, lecturer, inclusion evangelist',
    linkedIn: 'https://www.linkedin.com/in/marcinkrzanicki',
    hover: true,
    url: 'agenda/marcin-krzanicki',
  },
  {
    picture: 'img/speakers/anna-dulny-leszczynska.png',
    name: 'Anna Dulny-Leszczyńska',
    desc: 'UX designer, workshopper, accessibility advocate',
    linkedIn: 'https://www.linkedin.com/in/anna-dulny-leszczynska',
    hover: true,
    url: 'agenda/anna-dulny-leszczynska',
  },
  {
    picture: 'img/speakers/pieterjan-benoit.png',
    name: 'Pieterjan Benoit',
    desc: 'Content designer, UX writing mentor',
    linkedIn: BioAndAbstract[2]['linkedIn'],
    hover: true,
    url: BioAndAbstract[2]['url'],
  },
  {
    picture: 'img/speakers/lance-cummings.png',
    name: 'Lance Cummings',
    desc: 'Professor at University of North Carolina Wilmington',
    linkedIn: 'https://www.linkedin.com/in/lance-cummings-phd',
    hover: true,
    url: BioAndAbstract[7]['url'],
  },
  {
    picture: 'img/speakers/empty-card.png',
    name: null,
    desc: null,
    linkedIn: null,
    hover: false,
  },
  {
    picture: 'img/speakers/magdalena-michalak.png',
    name: 'Magdalena Michalak',
    desc: 'Technical and UX writer and AI enthusiast',
    linkedIn: 'https://www.linkedin.com/in/magdalena-michalak-a4b2626a',
    hover: true,
    url: BioAndAbstract[10]['url'],
  },
  {
    picture: 'img/speakers/sara-gradziel.png',
    name: 'Sara Grądziel',
    desc: 'UX/UI designer, accessibility advocate',
    linkedIn: 'https://www.linkedin.com/in/saragradziel',
    hover: true,
    url: BioAndAbstract[19]['url'],
  },
  {
    picture: 'img/speakers/dagmara-szol.png',
    name: 'Dagmara Szol',
    desc: (
      <>
        Founder <br /> of Creative Mess
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/dagmara-szol',
    hover: true,
    url: BioAndAbstract[12]['url'],
  },
  {
    picture: 'img/speakers/andrzej-niewiarowski.png',
    name: 'Andrzej Niewiarowski',
    desc: 'Chief Technical Writer at Hitachi Energy',
    linkedIn: 'https://www.linkedin.com/in/andrzej-niewiarowski-tech-writer',
    hover: true,
    url: BioAndAbstract[16]['url'],
  },
  {
    picture: 'img/speakers/katarzyna-koltun.png',
    name: 'Katarzyna Kołtun',
    desc: 'Technical writer',
    linkedIn: BioAndAbstract[5]['linkedIn'],
    hover: true,
    url: BioAndAbstract[5]['url'],
  },
  {
    picture: 'img/speakers/empty-card.png',
    name: null,
    desc: null,
    linkedIn: null,
    hover: false,
  },
  {
    picture: 'img/speakers/adam-turlej.png',
    name: 'Adam Turlej',
    desc: 'Technical writer',
    linkedIn: 'https://www.linkedin.com/in/adam-turlej-468222254',
    hover: true,
    url: BioAndAbstract[18]['url'],
  },
  {
    picture: 'img/speakers/linda-parys.png',
    name: 'Linda Parys',
    desc: 'Creativity trainer, brand coach and strategist',
    linkedIn: 'https://www.linkedin.com/in/linda-parys-02a48b26b/',
    hover: true,
    url: BioAndAbstract[20]['url'],
  },
  {
    picture: 'img/speakers/vojto.png',
    name: 'Vojto Monteur',
    desc: 'Producer, composer, sound designer',
    linkedIn: 'https://www.linkedin.com/in/vojtomonteur/',
    hover: true,
    url: BioAndAbstract[20]['url'],
  },
];
