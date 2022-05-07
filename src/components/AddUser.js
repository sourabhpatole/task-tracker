import React, { useState } from "react";

const AddUser = ({ onAdd }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [maritalstatus, setMaritalstatus] = useState("");
  const [education, setEducation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!fname && !lname) {
      alert("Please Enter first and last name");
      return;
    }
    onAdd({ fname, lname, email, education, age });
    setAge("");
    setEducation("");
    setEmail("");
    setFname("");
    setLname("");
    setMaritalstatus("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>First Name</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="Enter First Name"
        />
      </div>
      <div className="form-control">
        <label>Last Name</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Enter Last Name"
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Add Email"
        />
      </div>
      <div className="form-control">
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />
      </div>
      <div className="form">
        <div className="column">
          <div className="col">
            <form>
              <label>Marital Status</label>
              <label>
                <div className="radio">
                  <input
                    type="radio"
                    name="maritalstatus"
                    value="married"
                    onChange={(e) => setMaritalstatus(e.target.name)}
                  />
                  Married
                </div>
              </label>

              <label>
                <div className="radio">
                  <input
                    name="maritalstatus"
                    type="radio"
                    value="single"
                    onChange={(e) => setMaritalstatus(e.target.name)}
                  />
                  Single
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="form">
        <br />
        <label>Education</label>
        <div className="row">
          <form>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  value={education}
                  onChange={(e) => setEducation(e.currentTarget.checked)}
                />
                B-Tech
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  value={education}
                  onChange={(e) => setEducation(e.currentTarget.checked)}
                />
                10th
              </label>
            </div>
            <div className="checkbox ">
              <label>
                <input
                  type="checkbox"
                  value={education}
                  onChange={(e) => setEducation(e.currentTarget.checked)}
                />
                12th
              </label>
            </div>
          </form>
        </div>
      </div>
      <input
        className="btn "
        style={{ backgroundColor: "grey", margin: "40px 150px" }}
        type="submit"
        value="Save User"
      />
    </form>
  );
};

export default AddUser;
