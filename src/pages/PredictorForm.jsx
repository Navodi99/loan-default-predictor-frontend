import React, { useState } from "react";
import Header from "./Header/Header";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DnsIcon from "@mui/icons-material/Dns";
import Divider from "@mui/material/Divider";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { Button } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CustomForm from "../components/CustomForm";

const PredictorForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    loanID: "",
    income: "",
    loanAmount: "",
    creditScore: "",
    monthsEmployed: "",
    numCreditLines: "",
    interestRate: "",
    loanTerm: "",
    dtiRatio: "",
    educationStatus: "",
    employmentType: "",
    maritalStatus: "",
    loanPurpose: "",
    hasMortgage:false,
    hasDependents:false,
    hasCoSigner:false,
});

  console.log(formData);

  const formControlsPersonal = [
    {
      name: "fullname",
      label: "Full name",
      componentType: "input",
      placeholder: "Full name",
      type: "text",
    },
    {
      name: "age",
      label: "Age",
      componentType: "input",
      placeholder: "Enter your age",
      type: "number",
    },
    {
      name: "educationStatus",
      label: "Education Status",
      componentType: "select",
      options: [
        { id: "highschool", label: "High School" },
        { id: "bachelor", label: "Bachelor's Degree" },
        { id: "master", label: "Master's Degree" },
        { id: "phd", label: "PhD" },
      ],
    },
    {
      name: "maritalStatus",
      label: "Marital Status",
      componentType: "select",
      options: [
        { id: "single", label: "Single" },
        { id: "married", label: "Married" },
        { id: "divorced", label: "Divorced" },
        { id: "widowed", label: "Widowed" },
      ],
    },
  ];
  const formControlsEmployment = [
    {
      name: "employmentType",
      label: "Employment Type",
      componentType: "select",
      options: [
        { id: "fulltime", label: "Full-Time" },
        { id: "parttime", label: "Part-Time" },
        { id: "selfemployed", label: "Self-Employed" },
        { id: "unemployed", label: "Unemployed" },
      ],
    },

    {
      name: "monthsEmployed",
      label: "Months Employed",
      componentType: "input",
      placeholder: "Enter months employed",
      type: "number",
    },
  ];

  const formControlsCredit = [
    {
      name: "income",
      label: "Income",
      componentType: "input",
      placeholder: "Enter your income",
      type: "number",
    },
    {
      name: "creditScore",
      label: "Credit Score",
      componentType: "input",
      placeholder: "Enter your credit score",
      type: "number",
    },
    {
      name: "numCreditLines",
      label: "Number of Credit Lines",
      componentType: "input",
      placeholder: "Enter number of credit lines",
      type: "number",
    },
    {
      name: "dtiRatio",
      label: "Debt-to-Income Ratio",
      componentType: "input",
      placeholder: "Enter DTI ratio",
      type: "number",
    },
  ];

  const formControlsLoan = [
    {
      name: "loanAmount",
      label: "Loan Amount",
      componentType: "input",
      placeholder: "Enter loan amount",
      type: "number",
    },
    {
      name: "interestRate",
      label: "Interest Rate (%)",
      componentType: "input",
      placeholder: "Enter interest rate",
      type: "number",
    },
    {
      name: "loanTerm",
      label: "Loan Term (months)",
      componentType: "input",
      placeholder: "Enter loan term",
      type: "number",
    },
    {
      name: "loanPurpose",
      label: "Loan Purpose",
      componentType: "select",
      options: [
        { id: "home", label: "Home" },
        { id: "auto", label: "Auto" },
        { id: "other", label: "Other" },
        { id: "education", label: "Education" },
        { id: "business", label: "Business" },
      ],
    },
  ];

  const formControlsOther = [
    {
      name: "hasCoSigner",
      label: "Has Co-Signer",
      componentType: "checkbox",
    },
    {
      name: "hasDependents",
      label: "Has Dependents",
      componentType: "checkbox",
    },
    {
      name: "hasMortgage",
      label: "Has Mortgage",
      componentType: "checkbox",
    },
  ];

  return (
    <>
      <Header />
      <div className="relative w-[89%] h-full bg-white text-black justify-self-center shadow-lg py-2 px-8 pb-4 rounded-lg">
        <div className="flex items-center gap-4 mb-2">
          <ChecklistIcon />
          <h2 className="font-semibold text-lg">Loan Details Form</h2>
        </div>
        <div className="flex gap-8 mb-4">
          {/**Left Side */}
          <div className="flex flex-col flex-1 justify-start gap-3">
            {/**Personal Details */}
            <div className="flex gap-2 w-full flex-col">
              <Divider textAlign="left" className="w-full ">
                <div className="flex items-center justify-center gap-2">
                  <PersonIcon className="text-gray-500" />
                  <span className="text-gray-600 font-semibold">Personal</span>
                </div>
              </Divider>
              <CustomForm
                formControls={formControlsPersonal}
                formData={formData}
                setFormData={setFormData}
              />
            </div>

            {/**Employment Details */}
            <div className="flex gap-2 w-full flex-col">
              <Divider textAlign="left" className="w-full ">
                <div className="flex items-center justify-center gap-2">
                  <AccountBalanceIcon className="text-gray-500" />
                  <span className="text-gray-600 font-semibold">
                    Employment
                  </span>
                </div>
              </Divider>
              <CustomForm
                formControls={formControlsEmployment}
                formData={formData}
                setFormData={setFormData}
              />
            </div>

             {/**Other Details */}
             <div className="flex gap-2 w-full flex-col">
              <Divider textAlign="left" className="w-full ">
                <div className="flex items-center justify-center gap-2">
                  <DnsIcon className="text-gray-500" />
                  <span className="text-gray-600 font-semibold">Other</span>
                </div>
              </Divider>
              <CustomForm
                formControls={formControlsOther}
                formData={formData}
                setFormData={setFormData}
                ckeckEnable={true}
              />
            </div>
          </div>

          {/**Right Side */}
          <div className="flex flex-1 flex-col justify-start gap-3">
            {/**Loan Details */}
            <div className="flex gap-2 w-full flex-col">
              <Divider textAlign="left" className="w-full ">
                <div className="flex items-center justify-center gap-2">
                  <CreditScoreIcon className="text-gray-500" />
                  <span className="text-gray-600 font-semibold">Loan</span>
                </div>
              </Divider>
              <CustomForm
                formControls={formControlsLoan}
                formData={formData}
                setFormData={setFormData}
              />
            </div>

            {/**Credit Status */}
            <div className="flex gap-2 w-full flex-col">
              <Divider textAlign="left" className="w-full ">
                <div className="flex items-center justify-center gap-2">
                  <CreditCardIcon className="text-gray-500" />
                  <span className="text-gray-600 font-semibold">
                    Credit Status
                  </span>
                </div>
              </Divider>
              <CustomForm
                formControls={formControlsCredit}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end gap-4">
          <Button
            variant="contained"
            color="error"
            className=" relative flex gap-3 items-center"
          >
            Clear
          </Button>
          <Button
            variant="contained"
            color="success"
            className=" relative flex gap-3 items-center"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default PredictorForm;
