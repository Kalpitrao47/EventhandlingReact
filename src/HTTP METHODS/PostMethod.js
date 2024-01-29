import React, { useState } from 'react';

const PostMethod = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [responseData, setResponseData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      user: user,
      email: email,
    };

    try {
      const url = 'http://localhost:3500/users';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>POST API EXAMPLE</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='border border-black m-1'
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className='border border-black m-1'
          type='text'
          name='username'
          placeholder='Username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <input
          className='border border-black m-1'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button className='border border-black ' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostMethod;
