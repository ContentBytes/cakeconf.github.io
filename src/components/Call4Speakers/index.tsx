import useBaseUrl from "@docusaurus/useBaseUrl";
import { ButtonWhite } from "../Button";

import CakeStyles from "@site/src/pages/index.module.css";
import SpkStyles from "./styles.module.css";
import styles from "../Tickets/styles.module.css";


const BecomeSpeakerLink = 'https://forms.gle/UYy9iFg5hw8hJQVeA';
const Description = "Fill in the form to let us know what topic you want to present"

function Card({ title, desc, label, link }) {
  return (
    <div className={SpkStyles.card}>
      <div className={SpkStyles.columns}>
        <div className={SpkStyles.cardText}>
          <div className={SpkStyles.cardTitle}>{title}</div>
          <div className={SpkStyles.cardDesc}>{desc}</div>
        </div>
        <div className={SpkStyles.cardButton}><ButtonWhite link={link} label={label} /></div>
      </div>
    </div>
  );
}

export function Call4Speakers() {
  return (
    <div className={CakeStyles.backgroundBlue}>
      <div className="container">
        <div className={styles.title}>Call for speakers</div>
        <div className={styles.subtitle}>
          <p>With several speakers already revealed, you might wonder who is up next. Well, it can be you!</p>
          <p>Join CAKE conf as a speaker to share your experience and skills with other content creators.</p>
        </div>
        <div className={SpkStyles.images}>
          <img
            src={useBaseUrl("img/call4speakers.png")}
            alt="Information about CAKE conf"
            className={SpkStyles.image}
          />
        </div>
        <div className={SpkStyles.cards}>
        <Card title="Speaker form" desc={Description} label="🎙️ Become a speaker" link={BecomeSpeakerLink} />
      </div></div>
    </div>
  );
}