import React, { useState } from 'react';

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="templateSelector">Select Template:</label>
      <select id="templateSelector" onChange={handleTemplateChange}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
      </select>

      {selectedTemplate === 'template1' && <Template1 />}
      {selectedTemplate === 'template2' && <Template2 />}
    </div>
  );
};

const Template1 = () => (
  <div>
    <h2>Template 1 Component</h2>
    <p>This is the content of Template 1.</p>
  </div>
);

const Template2 = () => (
  <div>
    <h2>Template 2 Component</h2>
    <p>This is the content of Template 2.</p>
  </div>
);

export default TemplateSelector;
