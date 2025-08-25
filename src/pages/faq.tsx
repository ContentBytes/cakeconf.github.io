import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import FAQ from '../components/FAQ';
import { Map } from '../components/Cake/Map';

export default function CorporateTickets(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`FAQ`}>
      <main>
        <FAQ />
        <Map />
      </main>
    </Layout>
  );
}