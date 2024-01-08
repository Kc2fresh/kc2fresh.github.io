// LoanForm.js
import React, { useState } from "react";
import "./LoanForm.css"; // Import the CSS file for styling

const LoanForm = () => {
  const [formData, setFormData] = useState({
    loanDuration: "",
    purpose: "",
    housing: "",
    savingAccounts: "",
    checkingAccounts: "",
    job: "",
    creditAmount: "",
    timestamp: "",
    approvalDecision: 50,
    availableLoanSum: 0, // Default value for available loan sum
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      timestamp: new Date().toLocaleString(),
    }));
  };

  const handleApprovalChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      approvalDecision: parseInt(e.target.value, 10),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for calculating available loan sum goes here
    // For now, setting it to a fixed value for demonstration
    setFormData((prevData) => ({
      ...prevData,
      availableLoanSum: 5000,
    }));
    console.log("Form Data:", formData);
  };

  return (
    <form className="loan-form" onSubmit={handleSubmit}>
      <label>
        Loan Duration:
        <input
          type="number"
          name="loanDuration"
          value={formData.loanDuration}
          onChange={handleChange}
        />
      </label>
      <label>
        Purpose:
        <input
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
      </label>
      <label>
        Housing:
        <input
          type="text"
          name="housing"
          value={formData.housing}
          onChange={handleChange}
        />
      </label>
      <label>
        Saving Accounts:
        <input
          type="text"
          name="savingAccounts"
          value={formData.savingAccounts}
          onChange={handleChange}
        />
      </label>
      <label>
        Checking Accounts:
        <input
          type="text"
          name="checkingAccounts"
          value={formData.checkingAccounts}
          onChange={handleChange}
        />
      </label>
      <label>
        Job:
        <input
          type="text"
          name="job"
          value={formData.job}
          onChange={handleChange}
        />
      </label>
      <label>
        Credit Amount:
        <input
          type="number"
          name="creditAmount"
          value={formData.creditAmount}
          onChange={handleChange}
        />
      </label>

      {/* Feedback Box: Loan Approval Decision */}
      <div className="feedback-box">
        <label>
          Loan Approval Decision:
          <input
            type="range"
            name="approvalDecision"
            value={formData.approvalDecision}
            onChange={handleApprovalChange}
            min="0"
            max="100"
          />
          {formData.approvalDecision <= 50 ? "Not Approved" : "Approved"}
        </label>
      </div>

      {/* Feedback Box: Available Loan Sum */}
      <div className="feedback-box">
        <label>
          Available Loan Sum:
          <input
            type="number"
            name="availableLoanSum"
            value={formData.availableLoanSum}
            readOnly
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanForm;
