import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";


type SpeakerItem = {
  picture: string;
  name: string;
  desc: string;
  linkedIn: string;
};

const SpeakerList: SpeakerItem[] = [
  {
    picture: "img/speakers/tomek-prus.png",
    name: "Tomek Prus",
    desc: "Technical writer, content designer, UX writer",
    linkedIn: "https://www.linkedin.com/in/tomasz-prus-4b09b01a",
  },
  {
    picture: "img/speakers/wojtek-kutyla.png",
    name: "Wojtek Kutyła",
    desc: "Web accessibility specialist, WCAG auditor",
    linkedIn: "https://www.linkedin.com/in/wojtekkutyla",
  },
  {
    picture: "img/speakers/wojtek-aleksander.png",
    name: "Wojtek Aleksander",
    desc: "Content designer, UX writing trainer, published author",
    linkedIn: "https://www.linkedin.com/in/waleksander",
  },
  {
    picture: "img/speakers/ola-wieczorek.png",
    name: "Ola Wieczorek-Konieczko",
    desc: "Technical writer, documentation strategist",
    linkedIn: "https://www.linkedin.com/in/techwriter-wieczorek/",
  },
  {
    picture: "img/speakers/empty-card.png",
    name: null,
    desc: null,
    linkedIn: null,
  },
  {
    picture: "img/speakers/anna-dulny-leszczynska.png",
    name: "Anna Dulny-Leszczyńska",
    desc: "UX designer, workshopper, accessibility advocate",
    linkedIn: "https://www.linkedin.com/in/anna-dulny-leszczynska",
  },  
  {
    picture: "img/speakers/sergio.png",
    name: "Sergio Valero Notari",
    desc: "Content design manager, UX writing teacher",
    linkedIn: "https://www.linkedin.com/in/servalnot/",
  },
  {
    picture: "img/speakers/pawel-kowaluk.png",
    name: "Paweł Kowaluk",
    desc: "ContentOps engineer, podcaster, technical writer",
    linkedIn: "https://www.linkedin.com/in/pawel-kowaluk",
  },
  {
    picture: "img/speakers/michal-skowron.png",
    name: "Michał Skowron",
    desc: "Doc tools developer, podcaster",
    linkedIn: "https://www.linkedin.com/in/michalskowron",
  },
];

function Speaker({ picture, name, desc, linkedIn }: SpeakerItem) {
  return (
    <div className={styles.card}>
      <div>
        <img src={useBaseUrl(picture)}></img>
      </div>
      <div className={styles.cardName}>{name}</div>
      <div>{desc}</div>
      <div className={styles.cardSocials}>
        {linkedIn && <Link to={linkedIn}>
          <img
            src="img/icons/linkedin.svg"
            alt="Go to LinkedIn profile"
            height="30"
          />
        </Link>}
      </div>
    </div>
  );
}

function CreateCards() {
  return (
    <div className={styles.cardsAll}>
      {SpeakerList.map((props, idx) => (
        <Speaker key={idx} {...props} />
      ))}
    </div>
  );
}

export default function Speakers() {
  return (
    <div id="speakers" className={clsx(styles.background)}>
      <div className="container">
        <div className={styles.title}>Meet the speakers</div>
        <div className={styles.cardsAll}>{CreateCards()}</div>
      </div>
    </div>
  );
}
