import React, { useState } from 'react';
import { Selector } from './Selector';

export const SelectorSection = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const CONSTANTS_DESIGNS_PRICING = [
    { id: '1', category: 'design', label: 'Require a design and coding' },
    { id: '2', category: 'design', label: 'Have a design, need coding' },
    { id: '3', category: 'design', label: 'Design can be opensource' },
    { id: '4', category: 'design', label: 'Free design' },
  ];

  const CONSTANTS_DESIGNS_TIME = [
    { id: '1', category: 'time', label: 'Up to 2 weeks' },
    { id: '2', category: 'time', label: 'Up to 5 weeks' },
    { id: '3', category: 'time', label: 'Time is not important' },
  ];

  const CONSTANTS_PROJECT_TYPE = [
    { id: '1', category: 'type', label: 'Personal website' },
    { id: '2', category: 'type', label: 'Company/Trade website' },
    { id: '4', category: 'type', label: 'Ecommerce store' },
    { id: '5', category: 'type', label: 'Simple unique system' },
    { id: '6', category: 'type', label: 'Complicated unique system' },
  ];

  const handleSelectorChange = (id: string, label: string) => {
    console.log('fired');
    // Check if the answer is already selected
    const isSelected = selectedAnswers.find((answer) => answer === id);

    if (isSelected) {
      // If answer is already selected, remove it from the selected answers
      setSelectedAnswers((prevState) =>
        prevState.filter((answer) => answer !== id)
      );
    } else {
      // If answer is not selected, add it to the selected answers
      setSelectedAnswers((prevState) => [...prevState, label]);
    }
  };
  return (
    <section>
      <div className='flex content-between'>
        <div className='flex flex-col'>
          {CONSTANTS_DESIGNS_PRICING.map((selector, index) => (
            <Selector
              key={index}
              id={selector.id}
              category={selector.category}
              label={selector.label}
              onChange={handleSelectorChange}
            />
          ))}
        </div>

        <div className='flex flex-col'>
          {CONSTANTS_DESIGNS_TIME.map((selector, index) => (
            <Selector
              key={index}
              id={selector.id}
              category={selector.category}
              label={selector.label}
              onChange={handleSelectorChange}
            />
          ))}
        </div>

        <div className='flex flex-col'>
          {CONSTANTS_PROJECT_TYPE.map((selector, index) => (
            <Selector
              key={index}
              id={selector.id}
              category={selector.category}
              label={selector.label}
              onChange={handleSelectorChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
