import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "./API";

class UserGenerator extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    this.searchEmployee("");
  }

  searchEmployee = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
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
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Name || "Search for an Employee"}
            >
              {this.renderEmployeeSearchResult()}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserGenerator;