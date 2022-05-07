import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      fname: "john",
      lname: "doe",
      email: "john@example.com",
      age: 34,
      married: true,
      qualification: "B-Tech",
    },
    {
      id: 2,
      fname: "jimmy",
      lname: "james",
      email: "jimmy@example.com",
      age: 24,
      married: false,
      qualification: "12",
    },
  ]);
  const addUser = (user) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = { id, ...user };
    setUsers([...users, newUser]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div className="container">
      <Header />
      <AddUser onAdd={addUser} />
      {users.length > 0 ? (
        <Tasks users={users} onDelete={deleteUser} />
      ) : (
        "No User data to Show"
      )}
    </div>
  );
}

export default App;
