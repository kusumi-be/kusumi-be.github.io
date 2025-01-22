import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Overwright Lipsync',
    Png: require('@site/static/img/BSO_OL.png').default,
    description: (
      <>
        非破壊でリップシンクの破綻を簡単修正<br></br>
        編集はアニメーションを作るだけで完結
      </>
    ),
  },
  {
    title: 'Overwright BlendShape',
    Png: require('@site/static/img/BSO_OB.png').default,
    description: (
      <>
        非破壊で任意のシェイプキーを簡単編集<br></br>
        まばたき・MMD用などのシェイプキーの編集はこちらを
      </>
    ),
  },
];

function FeaturePng({Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featurePng} src={Png}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeaturePng key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
