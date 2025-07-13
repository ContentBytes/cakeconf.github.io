import Link from '@docusaurus/Link';
import { Bubble, BubbleItem } from '../Util/Bubble';
import styles from './styles.module.css';

const ContentBytesLink = 'https://contentbytes.pl';

const ContentBytesBubbles: BubbleItem[] = [
  {
    title: 'Community',
    desc: 'Content Bytes allows diverse content enthusiasts connect and exchange insights, fostering a truly thriving environment',
  },
  {
    title: 'Meetups',
    desc: 'Monthly meetups offer a regular dose of captivating content, turning regular meetings into a creative hub for all participants',
  },
  {
    title: 'Conferences',
    desc: 'Conferences offer a deep dive into a variety of topics presented by experts. Networking options spark ideas, projects, and cooperation.',
  },
];

function CreateContentBytesBubbles() {
  return (
    <div className={styles.bubbles}>
      {ContentBytesBubbles.map((props, idx) => (
        <Bubble key={idx} {...props} />
      ))}
    </div>
  );
}

export default function ContentBytes() {
  return (
    <div className="sp-background">
      <div className="container">
        <div className="sp-title">Content Bytes</div>
        <div className={styles.description}>
          <p>Our mission is to explore, share, and learn about content.</p>
          <p>
            Through talks, workshops, and networking sessions, we discover the
            role content plays in shaping products, empowering users, and
            driving strategy. We strongly believe that together, we can create a
            thriving content community ready to drive exciting initiatives.
          </p>
          <Link to={ContentBytesLink}>Find out more about Content Bytes!</Link>
        </div>
        <CreateContentBytesBubbles />
      </div>
    </div>
  );
}
