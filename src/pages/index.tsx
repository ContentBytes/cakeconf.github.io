import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import About from '../components/About';
import { Speakers } from '../components/Speakers';
import Topics from '../components/Topics';
import Networking from '../components/Networking';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`CAKE conf`}
      description="Uniting content enthusiasts!">
      <main>
        <About />
        <Speakers />
        <Partners />
        <Topics />
        <Networking />
        <Newsletter />
      </main>
    </Layout>
  );
}
