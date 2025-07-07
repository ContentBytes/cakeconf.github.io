import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Agenda } from '@site/src/components/Agenda';

export default function CakeAgenda(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Agenda`}>
      <main>
        <Agenda />
      </main>
    </Layout>
  );
}
