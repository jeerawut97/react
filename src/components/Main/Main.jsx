import { useState } from 'react';

import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import TabButton from '../TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from '../../data.js';


export default function Main() {
<<<<<<< HEAD
    function handleSelect(selectedButton) {
      console.log(selectedButton)
=======
    const [ selectedTopic, setSelectedTopic ] = useState('Please click a button!');

    function handleSelect(selectedTopic) {
      setSelectedTopic(selectedTopic);
>>>>>>> 6cd00faf4cf4a0001b8efb6ba9bb57a5a503dde5
    }

    return (
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    )
  }