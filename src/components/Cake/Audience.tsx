import styles from './styles.module.css';

const Title = 'Our audience';
const Description =
  "Who powers our events? Our audience comprises individuals from various backgrounds working together to create awesome content. We’re talking about technical writers crafting well-organized docs, software engineers building the future line by line, and UX writing and design pros ensuring it's all beautifully intuitive. We can't forget about product and content managers who steer the strategy, as well as marketing representatives who keep the ball rolling. Last but not least, we've got a fantastic contingent of translators, teachers, company owners, and other individuals who add a unique flavor to the mix!";
const Footer = 'Data based on meetup surverys from 2024-2025 season.';

function Card({ label }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardLabel}>{label}</div>
    </div>
  );
}

export function Audience() {
  return (
    <div className={styles.backgroundWhite}>
      <div className="container">
        <div className="sp-title">{Title}</div>
        <div className={styles.description}>{Description}</div>
        <div className={styles.footer}>{Footer}</div>
      </div>
    </div>
  );
}
