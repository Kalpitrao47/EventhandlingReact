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
    const generatedTemplate = `I have a ${dropdown1Value}, a ${dropdown2Value}, and a ${dropdown3Value}`;
    setTemplate(generatedTemplate);
  };

  

  return (
    <div>
      <div>
        <label>Dropdown 1:</label>
        <select value={dropdown1Value} onChange={handleDropdown1Change}>
        <option disabled value="">Select an option</option>
          <option value="BMW">BMW</option>
          <option value="MErcedez">MErcedez</option>
          <option value="BEnz">BEnz</option>
          <option value="Tavera">Tavera</option>
          <option value="Scorpio">Scorpio</option>
          
        </select>
      </div>
      <div>
        <label>Dropdown 2:</label>
        <select value={dropdown2Value} onChange={handleDropdown2Change}>
        <option disabled value="" >Select an option</option>
          <option value="Samasung">Samasung</option>
          <option value="Nokia">Nokia</option>
          <option value="Blackberry">Blackberry</option>
          <option value="redmi">redmi</option>
          <option value="Realme">Realme</option>
          
        </select>
      </div>
      <div>
        <label>Dropdown 3:</label>
        <select value={dropdown3Value} onChange={handleDropdown3Change}>
        <option disabled value="">Select an option</option>
          <option value="valueX">Value X</option>
          <option value="valueY">Value Y</option>
          <option value="valueV">Value V</option>
          <option value="valueW">Value W</option>
          <option value="valueS">Value S</option>
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
