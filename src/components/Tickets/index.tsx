import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./styles.module.css";
import cakeStyles from "@site/src/pages/index.module.css";


const PersonalTicketLink = 'https://soon';
const CorporateTicketLink = 'https://soon';

export function Badge() {
  return <span className={styles.badge}>Limited amount</span>;
}

export function Button({ link, label }) {
  return (
    <Link to={link}>
      <button className={clsx("button button--secondary", styles.button)}>Buy {label} ticket</button>
    </Link>
  );
}

export function PersonalTicket() {
  return (
    <div className={styles.card}>
      <div className={styles.center}>
        <div className={styles.name}>Personal ticket ☝️</div>
        <div className={clsx(styles.spaceBottom20, styles.ticketDesc)}>
          Ideal if you buy a single ticket for yourself
        </div>
        <div className={styles.price}>PLN 100</div>
        <div className={styles.spaceBottom20}>🐣 Early bird 🐣</div>
      </div>
      <div className={styles.explainer}>
        <p>Single ticket only</p>
        <p>Quick payments (card, BLIK)</p>
        <p>Ticket delivered straight to your inbox</p>
        <p>VAT-exempt</p>
      </div>
      <div className={clsx(styles.center, styles.spaceBottom20)}>
      <Button link={PersonalTicketLink} label="personal" /></div>
    </div>
  );
}

export function CorporateTicket() {
  return (
    <div className={styles.card}>
      <div className={styles.center}>
        <div className={styles.name}>Corporate ticket 🏢</div>
        <div className={clsx(styles.spaceBottom20, styles.ticketDesc)}>
          Ideal if your employer pays for the tickets
        </div>
        <div className={styles.price}>PLN 100 + VAT</div>
        <div className={styles.spaceBottom20}>🐣 Early bird 🐣</div>
      </div>
      <div className={styles.explainer}>
        <p>One or more tickets</p>
        <p>Paid by bank transfer</p>
        <p>VAT 23%</p>
      </div>
      <div className={clsx(styles.center, styles.spaceBottom20)}>
      <Button link={PersonalTicketLink} label="corporate" /></div>
    </div>
  );
}


export default function Tickets() {
  return (
    <div className={cakeStyles.backgroundBlue}>
      <div className="container">
        <div className={styles.title}>Tickets {Badge()}</div>
        <div className={styles.subtitle}>
          Choose between the personal or corporate ticket.
        </div>
        <div className={clsx(styles.space, styles.tickets)}>
        <div>{PersonalTicket()}</div>
        <div>{CorporateTicket()}</div>
      </div></div>
    </div>
  );
}
