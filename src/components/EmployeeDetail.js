import React from "react";
import axios from "axios";

// class App extends React.Component {
//     state = {
//       friends
//     };
//     remove = (name) => {
//       alert(name);
//       this.setState({
//         friends: this.state.friends.filter((friend) => friend.name !== name)
//       });
//     }
//     render() {
//         return ()}}

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: "0 auto" }}
      />
      <h3>{props.image}</h3>
      <h3> {props.name}</h3>
      <h3>{props.phone}</h3>
      <h3>{props.email}</h3>
      <h3> {props.dob}</h3>
      
    </div>
  );
}
// class EmployeeDetail extends React.Component {
//     state = {
//       employees
//     };
//     remove = (name) => {
//       alert(name);
//       this.setState({
//         employees: this.state.employees.filter((employee) => employee.name !== name)
//       });
//     }
//     render() {
//       return (
//         <Wrapper>
          
//           {this.state.employees.map((employee) => (
//           <EmployeeCard
//             name={employee.name}
//             image={employee.image}
//             occupation={employee.occupation}
//             location={employee.location}
//             key={employee.id}
//             remove={this.remove}
//           />
          
//           ))}
//         </Wrapper>
//       );
  
//     }
  
//   }
  

  

export default EmployeeDetail;