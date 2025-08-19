import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Content, MediaKitCards } from "../components/MediaKit";
import Partners from '../components/Partners';


export default function MediaKit(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Partners`}>
      <main>
        <Content />
        <Partners />
        <MediaKitCards />
      </main>
    </Layout>
  );
}
