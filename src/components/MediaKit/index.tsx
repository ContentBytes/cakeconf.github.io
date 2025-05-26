import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import type { ReactNode } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { ButtonWhite } from "../Button";

import CakeStyles from "@site/src/pages/index.module.css";
import KitStyles from "./styles.module.css";
import styles from "../Tickets/styles.module.css";

type KitItem = {
  title: string;
  desc: string;
  label: string;
  link: string;
}; 

const KitList: KitItem[] = [
  {
    title: "Press release",
    desc: "One-pager explaining who we are and what we do",
    label: "📣 Get press release",
    link: "string",
  },
  {
    title: "Logo",
    desc: "CAKE conf logo to add to your website and other materials",
    label: "🎨 Get logo",
    link: "string",
  },
  {
    title: "Social media package",
    desc: "Materials that you can use on your social media, for example post and stories",
    label: "🤳 Get social media package",
    link: "",
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
        <div className={KitStyles.cardButton}><ButtonWhite link={link} label={label} /></div>
      </div>
    </div>
  );
}

function CreateCards() {
  return (
    <div className={KitStyles.cardsAll}>
      {KitList.map((props, idx) => ( <Card key={idx} {...props} />))}
    </div>
  );
}

export function Content() {
  return (
    <div className={CakeStyles.backgroundBlue}>
      <div className="container">
        <div className={styles.title}>Media kit</div>
        <div className={styles.subtitle}>
          Grab the information about CAKE conf.
        </div>
        <div className={KitStyles.images}>
          <img
            src={useBaseUrl("img/cake-promo-card.svg")}
            alt="Information about CAKE conf"
            className={KitStyles.image}
          />
          <img
            src={useBaseUrl("img/audience.png")}
            alt="Audience at Content Bytes meetup"
            className={KitStyles.image}
          />
        </div>
        <div>
          <CreateCards />
        </div>
      </div>
    </div>
  );
}
