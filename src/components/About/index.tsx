import clsx from "clsx";
import Pill from "../Pill";
import styles from "./styles.module.css";
import { ButtonWhite } from "../Button";


const SignupForm = "https://forms.gle/4Z8qW1h58gCYDdLi7";

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
            <p>documentation, UX, accessibility, AI, storytelling, research</p>
          </div>
          <div className={clsx(styles.centerButtons, styles.spaceBottom)}>
            <ButtonWhite link={SignupForm} label="🙋 Sign up for updates" />
          </div>
        </div>
      </div>
    </div>
  );
}
