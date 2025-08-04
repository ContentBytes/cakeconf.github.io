import clsx from "clsx";
import Pill from "../Pill";
import styles from "./styles.module.css";
import { ButtonWhite, ButtonBlack } from "../Button";


const BecomeSpeakerLink = 'call4speakers';
const Tickets = 'tickets';
const Agenda = '/agenda';

export default function About() {
  return (
    <div>
      <div
        className={clsx(
          styles["hero-image"],
          "padding-top--lg",
          "padding-bottom--lg"
        )}
      >
        <div className="container">
          <div
            className={clsx(
              styles.center,
              styles.spaceTop,
              "padding-bottom--lg"
            )}
          >
            <Pill text="19&ndash;20 September, Jagiellonian University, Kraków" />
          </div>
          <p className={clsx(styles.title, "padding-bottom--lg")}>
            CAKE conf
            <br />
            uniting the content enthusiasts
          </p>
          <div className={clsx(styles.description, "padding-bottom--lg")}>
            <p>documentation, UX writing, accessibility, AI, storytelling, management</p>
          </div>
          <div className={clsx(styles.centerButtons, styles.spaceBottom)}>
            <ButtonBlack link={Agenda} label="🗓️ Check agenda" />
          </div>
        </div>
      </div>
    </div>
  );
}
