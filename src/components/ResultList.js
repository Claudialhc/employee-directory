import React from "react";

function ResultList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>

      <tbody>
        {props.results.map((result) => (
          <tr key={result.login.uuid}>
            <td>
              <img
                alt={result.title}
                className="img-fluid"
                src={result.picture.thumbnail}
              />
            </td>

            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td> {result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
//add the other ids to this page like name dob email phone #. between lines 5 and 15
