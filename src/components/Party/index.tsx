import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import CakeStyles from '@site/src/pages/index.module.css';
import KitStyles from '../MediaKit/styles.module.css';
import styles from '../Tickets/styles.module.css';
import style from './styles.module.css';

function Card() {
  return (
    <div className={KitStyles.card}>
      <div className={KitStyles.columns}>
        <div className={KitStyles.cardText}>
          <div className={KitStyles.cardTitle}>CAKE party</div>
          <div className={KitStyles.cardDesc}>Friday at 6:30pm</div>
        </div>
        <div className={KitStyles.cardButton}>
          Szklanki, ul. Jakuba 19, Kraków
        </div>
      </div>
    </div>
  );
}

export function Location() {
  return (
    <div className={style.backgroundWhite}>
      <div className="container">
        <div id="location" className="sp-title">
          How to get there
        </div>
        <div className={style.columns}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.8370363008776!2d19.943973776904095!3d50.05188401598095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6cf2591c69%3A0x4bb1bc3c96971144!2sSzklanki!5e0!3m2!1sen!2spl!4v1757442122210!5m2!1sen!2spl"
            width="500"
            height="450"
            loading="lazy"
          ></iframe>
          <div className={style.column}>
            <div>
              <p>
                <b>Option 1:</b> Let's go together as a group!
              </p>
              <p>
                <b>Option 2:</b> Take the tram no. 24 from Teatr Bagatela
                to Miodowa:
              </p>
              <ul>
                <li>
                  <Link
                    className={style.link}
                    to="https://maps.app.goo.gl/WeNsbTx5d6MFLr6N7"
                  >
                    Check the tram route
                  </Link>
                </li>
                <li>
                  <Link
                    className={style.link}
                    to="https://maps.app.goo.gl/k1fCFWgawtyXfY88A"
                  >
                    Check how to get to Szklanki from Miodowa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Party() {
  return (
    <div className="sp-background">
      <div className="container">
        <div className={styles.title}>CAKE party</div>
        <div className={styles.subtitle}>
          <p>Come and join us at the CAKE party! </p>
          <p>
            After the whole day of workshops and presentations, it's time to
            relax a little and connect with your fellow content creators.
          </p>
        </div>
        <div className={KitStyles.images}>
          <img
            src={useBaseUrl('img/party/party-2.png')}
            alt="Information about CAKE conf"
            className={KitStyles.image}
          />
          <img
            src={useBaseUrl('img/party/party-1.png')}
            alt="Audience at Content Bytes meetup"
            className={KitStyles.image}
          />
        </div>
        <Card />
      </div>
    </div>
  );
}
