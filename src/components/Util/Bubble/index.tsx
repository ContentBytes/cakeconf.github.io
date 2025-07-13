import styles from './styles.module.css';

export type BubbleItem = {
  icon?: string;
  title: string;
  desc: string;
};

export function Bubble({ icon, title, desc }: BubbleItem) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.description}>{desc}</div>
    </div>
  );
}
