import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { PartnerItem } from './Partners';

export type PartnerProps = {
  link: string;
  img: string;
  alt: string;
};

function CreateParner({ link, img, alt }: PartnerProps) {
  return (
    <Link to={link} title={alt}>
      <img src={useBaseUrl(img)} alt={alt} className={styles.image} />
    </Link>
  );
}

export default function Partners() {
  return (
    <div id="partners" className={styles.background}>
      <div className={styles.title}>Partners</div>
      <div className={styles.centerImgs}>
        <Link to="https://techwriter.pl" title="Go to techwriter.pl">
          <img
            src={useBaseUrl('img/partners/techwriter-pl.png')}
            alt="Go to techwriter.pl"
            className={styles.image}
          />
        </Link>
        <div className={styles.divider} />
        <Link
          to="https://techwriterkoduje.pl"
          title="Go to techwriterkoduje.pl"
        >
          <img
            src={useBaseUrl('img/partners/techwriter-koduje.png')}
            alt="Go to techwriterkoduje.pl"
            className={styles.image}
          />
        </Link>
        <div className={styles.divider} />
        <Link to="https://www.waysconf.com" title="Go to waysconf.com">
          <img
            src={useBaseUrl('img/partners/ways.png')}
            alt="Go to waysconf.com/"
            className={styles.image}
          />
        </Link>
        <div className={styles.divider} />
        <Link to="https://saiit.odoo.com" title="Go to SAiIT website">
          <img
            src={useBaseUrl('img/partners/saiit.png')}
            alt="Go to SAiIT website"
            className={styles.image}
          />
        </Link>
        <div className={styles.divider} />
      </div>
    </div>
  );
}
