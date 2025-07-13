import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { ButtonWhite } from '../Button';

import CakeStyles from '@site/src/pages/index.module.css';
import KitStyles from './styles.module.css';
import styles from '../Tickets/styles.module.css';

type KitItem = {
  title: string;
  desc: string;
  label: string;
  link: string;
};

const KitList: KitItem[] = [
  {
    title: 'Press release',
    desc: 'One-pager explaining who we are and what we do',
    label: '📣 Get press release',
    link: 'https://drive.google.com/file/d/13ZKo2zYMfUehK4kPrPbVjHzaoOt8lb-A/view?usp=sharing',
  },
  {
    title: 'Logo',
    desc: 'CAKE conf logo that you can add to your website and other materials',
    label: '🎨 Get logo',
    link: 'https://drive.google.com/drive/u/1/folders/1XCYf99HMLuhOLE_HjU19m4MvYbAE9CX3',
  },
  {
    title: 'Social media package',
    desc: 'Materials that you can use on your social media, for example in posts and stories',
    label: '🤳 Get social media package',
    link: 'https://drive.google.com/drive/u/1/folders/1D1khlpzSpOMehSKALSNdz0UPMYOrzz-3',
  },
];

function Card({ title, desc, label, link }: KitItem) {
  return (
    <div className={KitStyles.card}>
      <div className={KitStyles.columns}>
        <div className={KitStyles.cardText}>
          <div className={KitStyles.cardTitle}>{title}</div>
          <div className={KitStyles.cardDesc}>{desc}</div>
        </div>
        <div className={KitStyles.cardButton}>
          <ButtonWhite link={link} label={label} />
        </div>
      </div>
    </div>
  );
}

function CreateCards() {
  return (
    <div className={KitStyles.cardsAll}>
      {KitList.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </div>
  );
}

export function Content() {
  return (
    <div className={CakeStyles.backgroundBlue}>
      <div className="container">
        <div className={styles.title}>Become a partner</div>
        <div className={styles.subtitle}>
          <p>
            Gain extra visibility and make sure that our fantastic community of
            content creators learns about your company.
          </p>
          <p>
            For sponsorship and collaboration options, reach out to us at{' '}
            <Link to={'mailto:hello@contentbytes.pl'}>
              hello@contentbytes.pl
            </Link>
            .
          </p>
        </div>
        <div className={KitStyles.images}>
          <img
            src={useBaseUrl('img/cake-promo-card.png')}
            alt="Information about CAKE conf"
            className={KitStyles.image}
          />
          <img
            src={useBaseUrl('img/zamyslony-pk-w-duotones.png')}
            alt="Audience at Content Bytes meetup"
            className={KitStyles.image}
          />
        </div>
      </div>
    </div>
  );
}

export function MediaKitCards() {
  return (
    <div className={CakeStyles.backgroundBlue}>
      <div className="container">
        <div className={styles.title}>Media kit</div>
        <div className={styles.subtitle}>
          Grab the information about CAKE conf.
        </div>
        <div>
          <CreateCards />
        </div>
      </div>
    </div>
  );
}
