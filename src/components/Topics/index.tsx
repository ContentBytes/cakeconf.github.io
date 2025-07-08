import clsx from "clsx";
import styles from "./styles.module.css";
import { ButtonBlack } from '../Button';

const AgendaLink = "/agenda";

type TopicItem = {
  icon: string;
  title: string;
  desc: string;
};

const TopicList: TopicItem[] = [
  {
    icon: "🎯",
    title: "Storytelling",
    desc: "Build your personal brand and sell its unique value",
  },
  {
    icon: "📚",
    title: "Documentation",
    desc: "Discover tools, try new approaches, improve your content",
  },
  {
    icon: "📈",
    title: "Management",
    desc: "Manage teams, implement strategies, build confidence",
  },
  {
    icon: "🧩",
    title: "Accessibility",
    desc: "Make your content available to everyone",
  },
  {
    icon: "✍️",
    title: "UX writing",
    desc: "Boost user experience with well-crafted content",
  },
  {
    icon: "🤖",
    title: "AI",
    desc: "Transform your content with AI",
  },
];

function Topic({ icon, title, desc }: TopicItem) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.description}>{desc}</div>
    </div>
  );
}

function CreateTopicCards() {
  return (
    <div className={styles.cardsAll}>
      {TopicList.map((props, idx) => (
        <Topic key={idx} {...props} />
      ))}
    </div>
  );
}

export default function Topics() {
  return (
    <div className={styles.background}>
      <div className={clsx("container")}>
        <div className={clsx(styles.title)}>Thematic tracks</div>
        <div>
          <CreateTopicCards />
        </div>
        <div className={styles.buttons}><ButtonBlack link={AgendaLink} label="👀 See the agenda" /></div>
      </div>
    </div>
  );
}
