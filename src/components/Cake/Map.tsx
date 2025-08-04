import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export function Map() {
  return (
    <div className={styles.backgroundWhite}>
      <div className="container">
        <div id="location" className="sp-title">CAKE conf location</div>
        <div className={styles.columns}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.238484426794!2d19.921921912471984!3d50.063095215059285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0a10fd48c5%3A0x3e4620ca61d0754e!2sal.%20Adama%20Mickiewicza%209B%2C%2031-120%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1754212487042!5m2!1sen!2spl"
            width="500"
            height="450"
            loading="lazy"
          ></iframe>
          <div className={styles.column}>
            <img
              src={useBaseUrl('img/partners/university.png')}
              alt="Google maps with the CAKE conf location"
              width={150}
            />
            <div>
              <p>Jagiellonian University</p>
              <p>Institute of English Studies</p>
              <p> al. Mickiewicza 9B, Kraków</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
