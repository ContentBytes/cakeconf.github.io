import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { ButtonBlack } from '../Button';

const PartnersLink = '/partners';
const HitachiLink = 'http://www.hitachienergy.com';

export default function Sponsors() {
  return (
    <div id="sponsors" className="m-background-white">
      <div className="container">
        <div className="m-title-black">Sponsors</div>
        <Link to={HitachiLink} title='Go to hitachienergy.com'>
        <img
          className={styles.image}
          src={useBaseUrl('img/sponsors/hitachi.svg')}
        /></Link>
        <div className={styles.button}>
          <ButtonBlack link={PartnersLink} label="🤝 Become a sponsor" />
        </div>
      </div>
    </div>
  );
}
