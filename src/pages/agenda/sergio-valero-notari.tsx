import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CreateSpeakerPage from '@site/src/components/Speakers/SpeakerPage';

import { AgendaItems } from '@site/src/components/Agenda/Topics';
import { BioAndAbstract } from '@site/src/components/Agenda/BioAndAbstract';

const Title = AgendaItems[12]["title"];
const Parowka = AgendaItems[12]["category"];

const Name = BioAndAbstract[8]["speaker"];
const Bio = BioAndAbstract[8]["bio"];
const Abstract = BioAndAbstract[8]["abstract"];

const Picture = "img/speakers/sergio.png";

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