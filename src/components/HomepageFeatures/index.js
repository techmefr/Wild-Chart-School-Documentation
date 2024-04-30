import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Wild Chart School simplifies data visualization with its user-friendly
        approach. With just one component, effortlessly integrate charts into
        your projects. Enjoy seamless installation and customization through
        intuitive props."
      </>
    ),
  },
  {
    title: "Open Source Community: Welcome to Wild Chart School!",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Wild Chart School is a project maintained by the community,
        contributions are welcome!
      </>
    ),
  },
  {
    title: "Effortless Lightweight Visualization",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Wild Chart School offers effortless data visualization with its
        lightweight vanilla JavaScript approach, boasting just three
        dependencies for swift integration and optimal performance.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
