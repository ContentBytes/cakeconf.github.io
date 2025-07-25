import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from "./styles.module.css";

const Title = "Organizers";
const Description = "Say hello to the CAKE Conf organizers! We combine our content-driven powers to make sure the community thrives! 🔥";

type OrganizerProps = {
  name: string;
  role: string;
  picture: string;
  linkedin: string;
};

const OrganizerList: OrganizerProps[] = [
  {
    name: "Barbara Czyż",
    role: "Technical writer",
    picture: "img/orgs/barbara.png",
    linkedin: "https://www.linkedin.com/in/barbara-szwarc/",
  },
  {
    name: "Edyta Rakowska",
    role: "Senior technical writer",
    picture: "img/orgs/edyta.png",
    linkedin: "https://www.linkedin.com/in/edyta-rakowska/",
  },
  {
    name: "Paweł Chłodnicki",
    role: "Senior product designer",
    picture: "img/orgs/pawel.png",
    linkedin: "https://www.linkedin.com/in/pawelchlodnicki/",
  },
]

function Card({ name, role, picture, linkedin }) {
  return (
    <div>
      <div className={styles.orgCard}>
        <img 
          src={useBaseUrl(picture)} 
          className={styles.img} />
        <div className={styles.orgName}>{name}</div>
        <div className={styles.orgRole}>{role}</div>
        <Link to={linkedin}>
          <img
            src={useBaseUrl("img/icons/linkedin.svg")}
            alt="Go to LinkedIn profile"
            height="30"
          />
        </Link>
    </div></div>
  )
}

function CreateCards() {
  return (
    <div className={styles.cardsAll}>
      {OrganizerList.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </div>
  );
}

export function Organizers() {
  return (
    <div className={styles.backgroundWhite}>
      <div className='container'>
        <div className='sp-title'>{Title}</div>
        <div className={styles.description}>{Description}</div>
        <CreateCards />
        </div>
      </div>
  )
}
