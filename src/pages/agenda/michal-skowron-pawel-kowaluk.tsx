import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Category } from '@site/src/components/Agenda';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { BioAndAbstract } from '@site/src/components/Agenda/SpeakerDetails';

const Title = BioAndAbstract[14]["title"];
const Parowka = BioAndAbstract[14]["category"];

const Name = "Michał Skowron and Paweł Kowaluk";

const NameMS = BioAndAbstract[14]["speaker"];
const BioMS = BioAndAbstract[14]["bio"];

const NamePK = BioAndAbstract[15]["speaker"];
const BioPK = BioAndAbstract[15]["bio"];

const Abstract = BioAndAbstract[14]["abstract"];

const PictureMS = "img/speakers/michal-skowron.png";
const PicturePK = "img/speakers/pawel-kowaluk.png";

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
          <img className='sp-speaker-picture' src={useBaseUrl(PictureMS)} />
          <div className='sp-speaker-section-info'>
            <div className='sp-speaker-section-name'>{NameMS}</div>
            <div>{BioMS}</div>
          </div>
        </div>
        <hr />
        <div className='sp-speaker-section'>
          <img className='sp-speaker-picture' src={useBaseUrl(PicturePK)} />
          <div className='sp-speaker-section-info'>
            <div className='sp-speaker-section-name'>{NamePK}</div>
            <div>{BioPK}</div>
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