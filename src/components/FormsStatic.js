import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("option", option);
    const formData = {
      name: name,
      email: email,
      option: option,
    };

    console.log("Form Data:", formData);
    setName("");
    setEmail("");
    setOption("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <label>Name:</label>
          <input
            type="text"
            className="border border-black p-2 rounded-lg"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            className="border border-black p-2 rounded-lg"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="p-2">
          <label>Select Division:</label>
          <select
            onChange={(e) => setOption(e.target.value)}
            className="border border-black rounded-lg"
          >
            <option value="Counter">Counter</option>
            <option value="useEffect">useEffect</option>
          </select>
        </div>

        <button
          className="border border-black mt-4 rounded-lg p-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
