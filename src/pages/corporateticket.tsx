import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import CakeStyles from "./index.module.css";
import styles from "../components/Tickets/styles.module.css";

const AlternativeGoogleForm = 'https://forms.gle/xji9yC834uNVir5j8';

function TicketForm() {
  return (
    <div className="container">
      <div className={styles.title}>Corporate tickets</div>
      <div className={styles.spaceBottom20}>Answer these few questions and we'll get back to you.</div>
      <div className="ml-embedded" data-form="0lvNEd"></div>
      <div className="padding-bottom--lg"/>
      <div className={styles.spaceBottom20}>Can't see the questions? <Link to={AlternativeGoogleForm}>Try this form instead.</Link></div>
    </div>
  );
}

export default function CorporateTickets(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Get corporate tickets`}>
      <main>
        <TicketForm />
      </main>
    </Layout>
  );
}
