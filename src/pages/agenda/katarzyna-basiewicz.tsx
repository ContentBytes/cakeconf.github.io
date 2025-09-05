import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CreateSpeakerPage from '@site/src/components/Speakers/SpeakerPage';

import { BioAndAbstract } from '@site/src/components/Agenda/SpeakerDetails';

const Title = BioAndAbstract[13]["title"];
const Parowka = BioAndAbstract[13]["category"];
const Name = BioAndAbstract[13]["speaker"];
const Bio = BioAndAbstract[13]["bio"];
const Abstract = BioAndAbstract[13]["abstract"];

const Picture = "img/speakers/katarzyna-basiewicz.png";

export default function Speaker(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={Name}>
      <main>
        <CreateSpeakerPage
          title="Dostepnosc dokumentacji - nieoczywiste pulapki 🇵🇱" 
          parowka={Parowka} 
          abstract={Abstract} 
          picture={Picture} 
          name={Name} 
          bio={Bio} />
      </main>
    </Layout>
  );
}