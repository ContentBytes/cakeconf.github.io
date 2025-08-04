import clsx from "clsx";
import styles from "./styles.module.css";
import { ButtonBlack } from '../Button';
import { Bubble, BubbleItem } from '../Util/Bubble';

const AgendaLink = "/agenda";

const TopicList: BubbleItem[] = [
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

function CreateTopicCards() {
  return (
    <div className={styles.cardsAll}>
      {TopicList.map((props, idx) => (
        <Bubble key={idx} {...props} />
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
        <div className={styles.buttons}><ButtonBlack link={AgendaLink} label="🗓️ Check agenda" /></div>
      </div>
    </div>
  );
}
