import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import axios from "axios";
import API from "../API";
import ResultList from "./ResultList";


class UserGenerator extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
      API.userGenerator()
      .then((res) => {
          this.setState({ results: res.data.results })
          console.log(res.data)
        })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const emName = this.state.results.filter(result => result.name.first.toLowerCase().startsWith(event.target.value.toLowerCase()));
    this.setState({ search: event.target.value, results: emName });
  };


  renderEmployeeSearchResult() {
    if (!this.state.result.Name) {
      return <h3> No such employee was found.</h3>;
    }
    return (
    // {this.state.emoloyees.map((employee) => (
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
      console.log(this.state)
    return (
        <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        
        <ResultList results={this.state.results || [""]} />
      </div>
    );
  }
} 

export default UserGenerator;