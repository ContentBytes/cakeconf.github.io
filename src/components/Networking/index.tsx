import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Networking() {
  return (
    <div id="networking" className={styles.background}>
      <div className="container">
        <div className={styles.images}>
          <img
            className={styles.image}
            src={useBaseUrl('img/audience/networking-2.png')}
          />
          <img
            className={styles.image}
            src={useBaseUrl('img/audience/networking-1.png')}
          />
        </div>
        <div className={styles.title}>Networking at your own pace</div>
        <div className={styles.description}>
          <p>Workshops in small groups</p>
          <p>Afterparty</p>
          <p>Frequent breaks</p>
        </div>
      </div>
    </div>
  );
}
