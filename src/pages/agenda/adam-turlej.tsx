import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CreateSpeakerPage from '@site/src/components/Speakers/SpeakerPage';

import { AgendaItems } from '@site/src/components/Agenda/Topics';
import { BioAndAbstract } from '@site/src/components/Agenda/SpeakerDetails';

const Title = AgendaItems[23]['title'];
const Parowka = AgendaItems[23]['category'];
const Name = BioAndAbstract[18]['speaker'];
const Bio = BioAndAbstract[18]['bio'];
const Abstract = BioAndAbstract[18]['abstract'];
const Picture = 'img/favicon.svg';

export default function Speaker(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={Name}>
      <main>
        <CreateSpeakerPage
          title={Title}
          parowka={Parowka}
          abstract={Abstract}
          picture={Picture}
          name={Name}
          bio={Bio}
        />
      </main>
    </Layout>
  );
}
