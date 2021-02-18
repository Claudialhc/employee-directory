import "./App.css";
import UserGenerator from "./components/UserGenerator"



function App() {
  return (
    <>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center mt-3">Employee Directory</h1>
          <hr />
        <p className="lead text-center mt-3">
          Click on carrots to filter by heading or use the search box to narrow your results.
        </p>
      </div>
    </div>
    <UserGenerator />
    </>
  );
}

export default App;
