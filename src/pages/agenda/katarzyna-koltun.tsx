import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CreateSpeakerPage from '@site/src/components/Speakers/SpeakerPage';

import { BioAndAbstract } from '@site/src/components/Agenda/SpeakerDetails';

const Title = BioAndAbstract[5]["title"];
const Parowka = BioAndAbstract[5]["category"];
const Name = BioAndAbstract[5]["speaker"];
const Bio = BioAndAbstract[5]["bio"];
const Abstract = BioAndAbstract[5]["abstract"];

const Picture = "img/speakers/katarzyna-koltun.png";

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