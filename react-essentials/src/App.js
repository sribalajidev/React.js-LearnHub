import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import HiddenTab from "./components/HiddenTab/HiddenTab";

function App() {
  return (
    <>
    <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <HiddenTab />
      </main>
    </>
  );
}

export default App;