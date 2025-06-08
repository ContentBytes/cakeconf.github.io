import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Call4Speakers } from "../components/Call4Speakers";


export default function MediaKit(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`CAKE conf media kit`}>
      <main>
        <Call4Speakers />
      </main>
    </Layout>
  );
}