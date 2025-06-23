import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { SpeakersAll } from "../components/Speakers";

export default function CorporateTickets(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Meet the speakers`}>
      <main>
        <SpeakersAll />
      </main>
    </Layout>
  );
}