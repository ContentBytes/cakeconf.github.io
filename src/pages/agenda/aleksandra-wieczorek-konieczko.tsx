import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CreateSpeakerPage from '@site/src/components/Speakers/SpeakerPage';

import { AgendaItems } from '@site/src/components/Agenda/Topics';
import { BioAndAbstract } from '@site/src/components/Agenda/SpeakerDetails';

const Title = AgendaItems[8]["title"];
const Parowka = AgendaItems[8]["category"];

const Name = BioAndAbstract[6]["speaker"];
const Bio = BioAndAbstract[6]["bio"];
const Abstract = BioAndAbstract[6]["abstract"];

const Picture = "img/speakers/ola-wieczorek.png";

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
          bio={Bio} />
      </main>
    </Layout>
  );
}