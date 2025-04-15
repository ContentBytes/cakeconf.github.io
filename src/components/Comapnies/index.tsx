import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";


const Image = "img/cb-deco-colors.svg";

export default function Companies() {
  return (
    <div className={styles.background}>
      <div className={styles.title}>
        Speakers <br /> from the biggest in tech
      </div>
      <div className={styles.image}>
        <img src={Image} />
      </div>
    </div>
  );
}
