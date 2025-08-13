import clsx from 'clsx';
import styles from './styles.module.css';
import { AgendaItems } from './Topics';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';


const DayOneTalks = AgendaItems.slice(2, 13);
const DayTwoTalks = AgendaItems.slice(15, 26);

const DayOneWorkshops = AgendaItems.slice(0, 2);
const DayTwoWorkshops = AgendaItems.slice(13, 15);

/* Label-parówka for the talk type */
export function Category({ label }) {
  return <div className={styles.parowka}>{label}</div>;
}

export type CardProps = {
  category?: string;
  title: string;
  speaker?: string;
  time: string;
  bio?: string;
  abstract?: string;
  url?: string;
};

function Card({ category, title, speaker, time, url }: CardProps) {
  return (
    <Link
      className={clsx('sp-card-outline', styles.card, styles.link)}
      to={useBaseUrl(url)}
    >
      {category && <Category label={category} />}
      <div className={styles.topicTitle}>{title}</div>
      <div className={styles.topicSpeaker}>{speaker}</div>
      <div>{time}</div>
    </Link>
  );
}

function CreateCards({ type }) {
  return (
    <div className={styles.rightColumn}>
      {type.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </div>
  );
}

function CreateWorkshops({ day }) {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.section}>WORKSHOPS</div>
      <CreateCards type={day} />
    </div>
  );
}

function CreateTalks({ day }) {
  return (
    <div>
      <div className={styles.section}>TALKS</div>
      <CreateCards type={day} />
    </div>
  );
}

export function Agenda() {
  return (
    <div id="agenda" className="sp-background">
      <div className="container">
        <div className={clsx('sp-title')}>Agenda</div>
        <div className={styles.space}>
          Registration starts at 8:30 on both days.
        </div>
        <Tabs className="tabs--block">
          <TabItem value="first-day" label="Day 1, September 19" default>
            <CreateWorkshops day={DayOneWorkshops} />
            <CreateTalks day={DayOneTalks} />
          </TabItem>
          <TabItem value="second-day" label="Day 2, September 20">
            <CreateWorkshops day={DayTwoWorkshops} />
            <CreateTalks day={DayTwoTalks} />
          </TabItem>
        </Tabs>
      </div>
    </div>
  );
}
