import React from 'react';

const ParentComponent = ({ children }) => {
  return (
    <div>
      <h2>This is a parent component</h2>
      {children}
    </div>
  );
};

export default ParentComponent;
