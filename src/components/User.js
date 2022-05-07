const User = ({ user, onDelete }) => {
  return (
    <div className="task">
      <p>
        <div>
          <h3>
            {user.fname} {user.lname}{" "}
            <i
              className="fa-solid fa-delete-left"
              style={{ color: "tomato", cursor: "pointer" }}
              onClick={() => onDelete(user.id)}
            ></i>
          </h3>
        </div>
        <h4>Email : {user.email}</h4>
        <h4>Age : {user.age}</h4>

        <div>isMarried : {user.married ? "Yes" : "No"}</div>
        <span>Qualification : {user.qualification}</span>
      </p>
    </div>
  );
};

export default User;
