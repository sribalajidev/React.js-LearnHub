import "./CoreConcepts.scss";
import SectionLayout from "../SectionLayout/SectionLayout";
import { CORE_CONCEPTS } from '../../data';

function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function CoreConcepts() {
  return (
    <SectionLayout title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </SectionLayout>
  );
}

export default CoreConcepts;