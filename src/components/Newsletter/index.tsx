import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const NewsletterForm =
  "https://dashboard.mailerlite.com/forms/1431354/152058250434446580/share";

export default function Newsletter() {
  return (
    <div id="newsletter" className={styles.background}>
      <div className="container">
        <div className={styles.title}>Get latest updates</div>
        <div className={styles.description}>
          Get a fresh slice of CAKE news delivered straight to your inbox!
        </div>
        <div className="ml-embedded" data-form="Y2XUya"></div>
        <div className={styles.info}>
          Can't see the form? Try refreshing the page or{" "}
          <Link to={NewsletterForm}>open the form in a new tab</Link>.
        </div>
      </div>
    </div>
  );
}
