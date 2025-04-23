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
    picture: "img/speakers/wojtek-aleksander.png",
    name: "Name and surname",
    desc: "role desc",
    linkedIn: "https://google.pl",
  },
  {
    picture: "img/speakers/wojtek-aleksander.png",
    name: "Name and surname",
    desc: "role desc",
    linkedIn: "https://google.pl",
  },
  {
    picture: "img/speakers/wojtek-aleksander.png",
    name: "Name and surname",
    desc: "role desc",
    linkedIn: "https://google.pl",
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
        <Link to={linkedIn}>
          <img
            src="img/icons/linkedin.svg"
            alt="Go to LinkedIn profile"
            height="30"
          />
        </Link>
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
