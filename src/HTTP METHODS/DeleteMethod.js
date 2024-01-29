import React, { useEffect, useState } from "react";

const DeleteMethod = () => {
  const [users, setUsers] = useState([]);
  console.log("users", users);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await fetch("http://localhost:3500/users");
    const json = await data.json();
    // console.log(json);
    setUsers(json);
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
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default DeleteMethod;
