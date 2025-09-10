import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function FAQ() {
  return (
    <div id="faq" className="sp-background">
      <div className="container">
        <div className="sp-title">FAQ</div>
        <div className={styles.faq}>
          <details className={styles.collapsible}>
            <summary>Where and when does the conference take place?</summary>
            CAKE conf takes place on September 19th and 20th at al. Adama
            Mickiewicza 9B in Kraków.{' '}
            <Link to="#location" className={styles.link}>
              See the map
            </Link>{' '}
            for the exact location and the{' '}
            <Link to="agenda" className={styles.link}>
              agenda
            </Link>{' '}
            for details on presentations and workshops.
          </details>
          <details className={styles.collapsible}>
            <summary>Will there be lunch?</summary>
            Yes, lunch will be provided on both days.
          </details>
          <details className={styles.collapsible}>
            <summary>
              I can't attend the conference, can I get a refund?
            </summary>
            No, tickets are non-refundable.
          </details>
          <details className={styles.collapsible}>
            <summary>Will the presentations be recorded?</summary>
            No, we're not going to record the conference.
          </details>
          <details className={styles.collapsible}>
            <summary>How can I sign up for workshops?</summary>
            If you bought a ticket to the conference, you should have received
            an email with detailed instructions. If you didn't, let us know at
            <Link to={'mailto:hello@contentbytes.pl'} className={styles.link}>
              {' '}
              hello@contentbytes.pl
            </Link>
          </details>
          <details className={styles.collapsible}>
            <summary>When and where is the CAKE party happening?</summary>
            CAKE party takes place in Szklanki located at Jakuba 19 street. For
            details on how to get there, see{' '}
            <Link to="party" className={styles.link}>
              CAKE party
            </Link>
            .
          </details>
          <details className={styles.collapsible}>
            <summary>I still have questions, how can I contact you?</summary>
            You can write us an email at{' '}
            <Link to={'mailto:hello@contentbytes.pl'} className={styles.link}>
              {' '}
              hello@contentbytes.pl{' '}
            </Link>
            or send us a message on LinkedIn or Instagram.
          </details>
          <details className={styles.collapsible}>
            <summary>Will tickets become available again?</summary>
            Unfortunately, we're not planning to release any more tickets as
            we've reached the capacity of the venue. If you couldn't make it
            this time, we hope to see you next year!
          </details>
        </div>
      </div>
    </div>
  );
}
