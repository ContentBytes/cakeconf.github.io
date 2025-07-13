import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { ButtonWhite, ButtonBlack } from "../Button";
import styles from "./styles.module.css";

import { SpeakerList } from './SpeakersList';

const BecomeSpeakerLink = "call4speakers";
const SeeAllSpeakers = "/speakers";

type SpeakerItem = {
  picture: string;
  name: string;
  desc: React.ReactNode;
  linkedIn: string;
  hover: Boolean;
  url?: string;
};

function Speaker({ picture, name, desc, linkedIn, hover, url }: SpeakerItem) {
  const cardStyling = clsx(
    styles.card, {
    [styles.effect]: hover,
  })

  return (
    <div className={cardStyling}>
      <Link className={styles.link} to={url}>
        <div>
          <img src={useBaseUrl(picture)}></img>
        </div>
        <div className={styles.cardName}>{name}</div>
        <div>{desc}</div>
      </Link>
      <div className={styles.cardSocials}>
        {linkedIn && (
          <Link className={styles.iconLI} to={linkedIn}></Link>
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
