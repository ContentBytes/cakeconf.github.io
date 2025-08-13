import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Category } from '@site/src/components/Agenda';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { BioAndAbstract } from '@site/src/components/Agenda/SpeakerDetails';

const Title = BioAndAbstract[20]["title"];
const Parowka = BioAndAbstract[20]["category"];

const Name = "Linda Parys and Vojto Monteur";

const NameLP = BioAndAbstract[20]["speaker"];
const BioLP = BioAndAbstract[20]["bio"];

const NameVM = BioAndAbstract[21]["speaker"];
const BioVM = BioAndAbstract[21]["bio"];

const Abstract = BioAndAbstract[20]["abstract"];

const PictureLP = 'img/speakers/linda-parys.png';
const PictureVM = 'img/speakers/vojto.png';

function CreateDoublePage({ title, parowka, abstract }) {
  return (
    <div className='sp-background'>
      <div className='container'>
        <div className='sp-title'>{title}</div>
        <div className='sp-space-top-30' />
        <Category label={parowka} />
        <div className='sp-abstract'>{abstract}</div>
        <hr />
        <div className='sp-speaker-section'>
          <img className='sp-speaker-picture' src={useBaseUrl(PictureLP)} />
          <div className='sp-speaker-section-info'>
            <div className='sp-speaker-section-name'>{NameLP}</div>
            <div>{BioLP}</div>
          </div>
        </div>
        <hr />
        <div className='sp-speaker-section'>
          <img className='sp-speaker-picture' src={useBaseUrl(PictureVM)} />
          <div className='sp-speaker-section-info'>
            <div className='sp-speaker-section-name'>{NameVM}</div>
            <div>{BioVM}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Speaker(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={Name}>
      <main>
        <CreateDoublePage
          title={Title} 
          parowka={Parowka} 
          abstract={Abstract} 
         />
      </main>
    </Layout>
  );
}