import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import HiddenTab from "./components/HiddenTab/HiddenTab";

import { CORE_CONCEPTS } from './data.js';

function App() {
  return (
    <div>
      <main>
        <Header />
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
        <HiddenTab />
      </main>
    </div>
  );
}

export default App;