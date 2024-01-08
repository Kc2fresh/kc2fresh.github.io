import React from "react";
import ReactDOM from "react-dom";
import LoanForm from "./LoanForm";

const App = () => {
  return (
    <div>
      <h1>Loan Application Form</h1>
      <LoanForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
