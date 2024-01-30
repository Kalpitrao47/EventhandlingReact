import React, { useState, useEffect } from 'react';

const TemplateSelectorDynamic = () => {
  const [templateOptions, setTemplateOptions] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    
    const fetchTemplateOptions = async () => {
      const response = await fetch('your_api_endpoint');
      const data = await response.json();
      setTemplateOptions(data); 
    };

    fetchTemplateOptions();
  }, []);

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="templateSelector">Select Template:</label>
      <select id="templateSelector" onChange={handleTemplateChange}>
        {templateOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedTemplate === '1 - Job Suggestion Template' && <Template1 />}
      {selectedTemplate === '2 - Interview Call Template' && <Template2 />}
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

export default TemplateSelectorDynamic;
