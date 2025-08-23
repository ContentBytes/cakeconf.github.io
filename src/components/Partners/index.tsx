import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { ButtonWhite } from '../Button';
import { PartnerList } from './Partners';

const PartnersLink = '/partners';

export type PartnerProps = {
  link: string;
  img: string;
  alt: string;
};

function CreateParner({ link, img, alt }: PartnerProps) {
  return (
    <div>
      <Link to={link} title={alt}>
        <img src={useBaseUrl(img)} alt={alt} className={styles.image} />
      </Link>
    </div>
  );
}

function CreateParners() {
  return (
    <div className={styles.centerImgs}>
      {PartnerList.map((props, idx) => (
        <CreateParner key={idx} {...props} />
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <div id="partners" className="sp-background">
      <div className={styles.title}>Partners</div>
      <div className={styles.centerImgs}>
        <CreateParners />
      </div>
      <div className={styles.button}>
        <ButtonWhite link={PartnersLink} label="🤝 Become a partner" />
      </div>
    </div>
  );
}
