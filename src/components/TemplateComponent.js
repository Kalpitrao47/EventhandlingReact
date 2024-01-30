import React, { useState } from 'react';

const TemplateComponent = () => {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [dropdown3Value, setDropdown3Value] = useState('');
  const [template, setTemplate] = useState('');

  const handleDropdown1Change = (event) => {
    setDropdown1Value(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };

  const handleDropdown3Change = (event) => {
    setDropdown3Value(event.target.value);
  };

  const generateTemplate = () => {
    // You can customize this template based on your requirements
    const generatedTemplate = `Selected values: ${dropdown1Value}, ${dropdown2Value}, ${dropdown3Value}`;
    setTemplate(generatedTemplate);
  };

  return (
    <div>
      <div>
        <label>Dropdown 1:</label>
        <select value={dropdown1Value} onChange={handleDropdown1Change}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Dropdown 2:</label>
        <select value={dropdown2Value} onChange={handleDropdown2Change}>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Dropdown 3:</label>
        <select value={dropdown3Value} onChange={handleDropdown3Change}>
          <option value="valueX">Value X</option>
          <option value="valueY">Value Y</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button onClick={generateTemplate}>Generate Template</button>
      <div>
        <h3>Generated Template:</h3>
        <p>{template}</p>
      </div>
    </div>
  );
};

export default TemplateComponent;
