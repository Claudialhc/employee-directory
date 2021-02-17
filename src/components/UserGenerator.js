import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../API";

class UserGenerator extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
      API.userGenerator()
      .then((res) => {
          this.setState({ result: res.data })
          console.log(res.data)
        })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  renderEmployeeSearchResult() {
    if (!this.state.result.Name) {
      return <h3> No such employee was found.</h3>;
    }
    return (
      <EmployeeDetail
        img={this.state.result.Image}
        name={this.state.result.Name}
        phone={this.state.result.Phone}
        email={this.state.result.Email}
        dob={this.state.result.DOB}
      />
    );
  }

  render() {
    return (
      ""
    );
  }
}

export default UserGenerator;