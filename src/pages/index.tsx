import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import About from '../components/About';
import Speakers from '../components/Speakers';
import Topics from '../components/Topics';
import Companies from '../components/Comapnies';
import Networking from '../components/Networking';
import Partners from '../components/Partners';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`CAKE conf`}
      description="Uniting content enthusiasts!">
      <main>
        <About />
        <Speakers />
        <Topics />
        <Companies />
        <Networking />
        <Partners />
      </main>
    </Layout>
  );
}
