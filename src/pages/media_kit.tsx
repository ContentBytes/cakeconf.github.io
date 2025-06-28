import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Content } from "../components/MediaKit";


export default function MediaKit(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Partners`}>
      <main>
        <Content />
      </main>
    </Layout>
  );
}
