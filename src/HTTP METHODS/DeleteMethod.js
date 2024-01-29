import React, { useEffect, useState } from "react";

const DeleteMethod = () => {
  const [users, setUsers] = useState([]);
  console.log("users", users);
  const [name,setName] = useState("");
  console.log("name", name);
  const [user,setUser] = useState("");
  console.log("user", user);
  const [email,setEmail] = useState("");
  console.log("email", email);
  const [responseData, setResponseData] = useState([]);

  
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await fetch("http://localhost:3500/users");
    const json = await data.json();
    // console.log(json);
    setUsers(json);
    setName(json[0].name)
    setUser(json[0].user)
    setEmail(json[0].email)
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3500/users/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(`Data with ID ${id} deleted successfully.`);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } else {
        console.error(
          `Error deleting data with ID ${id}. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error("An error occurred while deleting data:", error.message);
    }
  };

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

  const upDateUser = (users)=>{
    let {name,user,email} = users
      console.log("update user id",users)
    //   setName(users.name)
    // setUser(users.user)
    // setEmail(users.email)
    console.log("users.name",name)
  }

  return (
    <div>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Remove User</th>
          </tr>
        </thead>
        {users.map((users) => {
          return (
            <tbody>
              <tr>
                <td>{users.name}</td>
                <td>{users.user}</td>
                <td>{users.email}</td>
                {/*<td>{users.address.street}</td>*/}
                <td
                  className="border border-black bg-slate-700 text-white cursor-pointer"
                  onClick={() => deleteUser(users.id)}
                >
                  Delete User
                </td>

                <td
                  className="border border-black bg-slate-700 text-white cursor-pointer"
                  onClick={() => upDateUser(users)}
                >
                  Update User
                </td>

              </tr>
            </tbody>
          );
        })}
      </table>
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

export default DeleteMethod;
