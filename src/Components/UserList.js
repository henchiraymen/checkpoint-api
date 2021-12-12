import axios from "axios";
import React, { useState } from "react";
import "../App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    setUsers(res.data);
  });
  return (
    <div className="list">
      <h1>List Of Users :</h1>
      {users.map((user) => (
        <h5 key={user.id}> {user.name} </h5>
      ))}
    </div>
  );
};
export default UserList;
