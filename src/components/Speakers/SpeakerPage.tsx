import useBaseUrl from '@docusaurus/useBaseUrl';
import { Category } from '@site/src/components/Agenda';

export default function CreateSpeakerPage({ title, parowka, abstract, picture, name, bio }) {
  return (
    <div className='sp-background'>
      <div className='container'>
        <div className='sp-title'>{title}</div>
        <div className='sp-space-top-30' />
        <Category label={parowka} />
        <div className='sp-abstract'>{abstract}</div>
        <hr />
        <div className='sp-speaker-section'>
          <img className='sp-speaker-picture' src={useBaseUrl(picture)} />
          <div className='sp-speaker-section-info'>
            <div className='sp-speaker-section-name'>{name}</div>
            <div>{bio}</div>
          </div>
        </div>
      </div>
    </div>
  )
}