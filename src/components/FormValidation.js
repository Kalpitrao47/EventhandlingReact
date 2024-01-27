import React, { useState } from "react";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail) {
      console.log(email);
      console.log(pass);
    }else {
        console.log("Invalid email address");
      }
  };
  const handleEmail = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(emailRegex.test(enteredEmail));
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="border border-black"
          placeholder="Enter Email"
          type="type"
          onChange={handleEmail}
        />
        <input
          className="border border-black"
          placeholder="Enter Pass"
          type="password"
          onChange={handlePass}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
