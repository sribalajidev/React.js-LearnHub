import { useState } from "react";
import { EXAMPLES } from "../../data";
import SectionLayout from "../SectionLayout/SectionLayout";
import './HiddenTab.scss';

function HiddenTab() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) { 
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <SectionLayout title="Examples" id="examples">
      <TabBtnLayout
        ButtonTag="menu"
        buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>
            Components
          </TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>
            JSX
          </TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
            Props
          </TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>
            State
          </TabButton>
        </>
      }>
        {tabContent}
      </TabBtnLayout>
      <menu>
      </menu>
    </SectionLayout>
  );
}

function TabButton({children, isSelected, ...attributes}) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...attributes}>
        {children}
      </button>
    </li>
  );
}

function TabBtnLayout ({ children, buttons, ButtonTag }) {
  // const ButtonTag = buttonTag;
  return (
    <>
      <ButtonTag>
        {buttons}
      </ButtonTag>
      {children}
    </>
  );
}

export default HiddenTab;