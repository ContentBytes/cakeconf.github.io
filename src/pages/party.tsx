import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Party, Location } from '../components/Party';

export default function CakeParty(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`CAKE party`}>
      <main>
        <Party />
        <Location />
      </main>
    </Layout>
  );
}