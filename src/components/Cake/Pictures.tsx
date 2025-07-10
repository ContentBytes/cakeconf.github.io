import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from "./styles.module.css";


export default function CakePictures() {
  return (
    <div className='sp-background'>
      <div className='container'>
        <div className={styles.images}>
          <div className={styles.column}>
            <img
              src={useBaseUrl("img/audience/audience-3.png")}
              alt="Audience at Content Bytes meetup"
              className={styles.image}
            />
          </div>
          <div className={styles.column}>
            <img
              src={useBaseUrl("img/audience/audience-1.png")}
              alt="Audience at Content Bytes meetup"
              className={styles.image}
            />
            <img
              src={useBaseUrl("img/audience/audience-2.png")}
              alt="Audience at Content Bytes meetup"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  )
}