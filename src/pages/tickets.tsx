import Layout from "@theme/Layout";
import type {ReactNode} from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Tickets from "../components/Tickets";

export default function CakeTickets(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Get tickets`}><main>
      <Tickets /></main>
    </Layout>
  )
}