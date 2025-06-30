import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { ButtonWhite, ButtonBlack } from "../Button";
import styles from "./styles.module.css";

const BecomeSpeakerLink = "call4speakers";
const SeeAllSpeakers = "speakers";

type SpeakerItem = {
  picture: string;
  name: string;
  desc: string;
  linkedIn: string;
  hover: Boolean;
};

const SpeakerList: SpeakerItem[] = [
  {
    picture: "img/speakers/nachu.png",
    name: "Nachu Herrera",
    desc: "UX content designer",
    linkedIn: "https://www.linkedin.com/in/herreranadiam",
    hover: true,
  },
  {
    picture: "img/speakers/dariusz-drezno.png",
    name: "Dariusz Drezno",
    desc: "Speaker, trainer, accessibility expert",
    linkedIn: "https://www.linkedin.com/in/dariusz-drezno",
    hover: true,
  },
  {
    picture: "img/speakers/lukasz-gornicki.png",
    name: "Łukasz Górnicki",
    desc: "Consultant, speaker, trainer, open source expert",
    linkedIn: "https://www.linkedin.com/in/lukasz-gornicki-a621914",
    hover: true,
  },
  {
    picture: "img/speakers/marcin-krzanicki.png",
    name: "Marcin Krzanicki",
    desc: "UX designer, lecturer, inclusion evangelist",
    linkedIn: "https://www.linkedin.com/in/marcinkrzanicki",
    hover: true,
  },
  {
    picture: "img/speakers/empty-card.png",
    name: null,
    desc: null,
    linkedIn: null,
    hover: false,
  },
  {
    picture: "img/speakers/tomek-prus.png",
    name: "Tomek Prus",
    desc: "Technical writer, content designer, UX writer",
    linkedIn: "https://www.linkedin.com/in/tomasz-prus-4b09b01a",
    hover: true,
  },
  {
    picture: "img/speakers/ola-wieczorek.png",
    name: "Ola Wieczorek-Konieczko",
    desc: "Technical writer, documentation strategist",
    linkedIn: "https://www.linkedin.com/in/techwriter-wieczorek/",
    hover: true,
  },
  {
    picture: "img/speakers/anna-dulny-leszczynska.png",
    name: "Anna Dulny-Leszczyńska",
    desc: "UX designer, workshopper, accessibility advocate",
    linkedIn: "https://www.linkedin.com/in/anna-dulny-leszczynska",
    hover: true,
  },
  {
    picture: "img/speakers/wojtek-kutyla.png",
    name: "Wojtek Kutyła",
    desc: "Web accessibility specialist, WCAG auditor",
    linkedIn: "https://www.linkedin.com/in/wojtekkutyla",
    hover: true,
  },
  {
    picture: "img/speakers/wojtek-aleksander.png",
    name: "Wojtek Aleksander",
    desc: "Content designer, UX writing trainer, published author",
    linkedIn: "https://www.linkedin.com/in/waleksander",
    hover: true,
  },
  {
    picture: "img/speakers/empty-card.png",
    name: null,
    desc: null,
    linkedIn: null,
    hover: false,
  },
  {
    picture: "img/speakers/sergio.png",
    name: "Sergio Valero Notari",
    desc: "Content design manager, UX writing teacher",
    linkedIn: "https://www.linkedin.com/in/servalnot/",
    hover: true,
  },
  {
    picture: "img/speakers/pawel-kowaluk.png",
    name: "Paweł Kowaluk",
    desc: "ContentOps engineer, podcaster, technical writer",
    linkedIn: "https://www.linkedin.com/in/pawel-kowaluk",
    hover: true,
  },
  {
    picture: "img/speakers/michal-skowron.png",
    name: "Michał Skowron",
    desc: "Doc tools developer, podcaster",
    linkedIn: "https://www.linkedin.com/in/michalskowron",
    hover: true,
  },
];

function Speaker({ picture, name, desc, linkedIn, hover }: SpeakerItem) {
  const cardStyling = clsx(
    styles.card, {
    [styles.effect]: hover,
  })

  return (
    <div className={cardStyling}>
      <div>
        <img src={useBaseUrl(picture)}></img>
      </div>
      <div className={styles.cardName}>{name}</div>
      <div>{desc}</div>
      <div className={styles.cardSocials}>
        {linkedIn && (
          <span className={styles.iconLI}><Link to={linkedIn}>
          </Link></span>
        )}
      </div>
    </div>
  );
}

function CreateCardsAll() {
  return (
    <div className={styles.cardsAll}>
      {SpeakerList.map((props, idx) => (
        <Speaker key={idx} {...props} />
      ))}
    </div>
  );
}

function CreateCards() {
  const ShortList = SpeakerList.slice(0, 6);
  return (
    <div className={styles.cardsAll}>
      {ShortList.map((props, idx) => (
        <Speaker key={idx} {...props} />
      ))}
    </div>
  );
}

export function Speakers() {
  return (
    <div id="speakers" className={clsx(styles.background)}>
      <div className="container">
        <div className={styles.title}>Meet the speakers</div>
        <div className={styles.cardsAll}>{CreateCards()}</div>
        <div className={styles.buttons}>
          <ButtonWhite link={BecomeSpeakerLink} label="🎙️ Become a speaker" />
          <ButtonBlack link={SeeAllSpeakers} label="👀 See all speakers" />
        </div>
      </div>
    </div>
  );
}

export function SpeakersAll() {
  return (
    <div id="speakers" className={clsx(styles.background)}>
      <div className="container">
        <div className={styles.titleSubpage}>Speakers</div>
        <div>Meet the CAKE conf speakers!</div>
        <div className={clsx(styles.cardsAll, styles.spacing)}>{CreateCardsAll()}</div>
      </div>
    </div>
  );
}
