import React, { useState } from "react";

const HideShow = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {status ? <h1>Hello world</h1> : null}

      <button className="border border-black" onClick={() => setStatus(false)}>Hide</button>
      <button className="border border-black" onClick={() => setStatus(true)}>Show</button>
      <button className="border border-black" onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
};

export default HideShow;
