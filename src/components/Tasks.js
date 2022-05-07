import User from "./User";
const Tasks = ({ users, onDelete }) => {
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
