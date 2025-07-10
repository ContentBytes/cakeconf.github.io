import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import CakeIntro from '../components/Cake';
import { Audience } from '../components/Cake/Audience';
import ContentBytes from '../components/Cake/ContentBytes';
import { Organizers } from '../components/Cake/Organizers';
import CakePictures from '../components/Cake/Pictures';

export default function AboutCake(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About`}
      description="What's in the CAKE?">
      <main>
        <CakeIntro />
        <Audience />
        <ContentBytes />
        <Organizers />
        <CakePictures />
      </main>
    </Layout>
  );
}