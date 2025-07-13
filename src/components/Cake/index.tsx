import { Bubble, BubbleItem } from '../Util/Bubble';
import styles from "./styles.module.css";

const CakeElements: BubbleItem[] = [
  {
    title: "Speakers",
    desc: "Skilled speakers are key to delivering topics that are not only deeply informative but also genuinely entertaining",
  },
  {
    title: "Diverse audience",
    desc: "Perspectives from tech writing, UX design, AI, development,and content management stir up some exciting conversations.",
  },
  {
    title: "Workshops",
    desc: "Workshops give the participants the tools and mentorship to master new content skills hands on.",
  },
  {
    title: "Talks",
    desc: "Talk topics range from accessibility, AI, content creation and testing to content and team management",
  },
  {
    title: "Networking",
    desc: "Networking is the heart of our event! Breaks mean swapping thoughts,sparking new ideas, and even kickstarting exciting projects!",
  },
]

function CreateCakeBubbles() {
    return (
      <div className={styles.bubbles}>
        {CakeElements.map((props, idx) => (
          <Bubble key={idx} {...props} />
        ))}
      </div>
  );
}

export default function CakeIntro() {
  return (
    <div className='sp-background'>
      <div className='container'>
        <div className='sp-title'>What's in the CAKE</div>
        <div className={styles.description}>
          <p>CAKE conf is a community-powered conference, organised by Content Bytes.</p>
          <p>We are celebrating all things content: from UX writing to AI, from documentation to storytelling, from accessibility to managing content teams. We bring together content enthusiasts from different backgrounds to share insights, spark ideas, and build a more connected content ecosystem.</p>
          <p>CAKE conf is a non-profit project, which means that all proceeds from the tickets fuel the conference experience.</p>
        </div>
        <CreateCakeBubbles />
      </div>
    </div>
  )
}