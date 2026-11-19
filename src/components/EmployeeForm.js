
import React from "react";
import "../EmployeeForm.css";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      title: "",
      department: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const employee = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      department: this.state.department
    };

    const savedEmployees = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );

    savedEmployees.push(employee);

    localStorage.setItem(
      "employees",
      JSON.stringify(savedEmployees)
    );

    alert("Employee saved successfully!");

    this.setState({
      name: "",
      email: "",
      title: "",
      department: ""
    });
  };

  render() {
    return (
      <div className="employee-form">
        <h1>Add Employee</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="title">Job Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
