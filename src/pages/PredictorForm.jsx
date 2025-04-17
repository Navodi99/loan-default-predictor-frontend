import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserIcon,
  BriefcaseIcon,
  CreditCardIcon,
  BuildingIcon,
} from "lucide-react";
import { predictorService } from "../Services/predictorService";
import Loader from "../components/Loader";

const PredictorForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loaderText,setLoaderText] = useState("");
  const [userData, setuserData] = useState({
    UserName: "",
    Age: "",
    Income: "",
    LoanAmount: "",
    CreditScore: "",
    MonthsEmployed: "",
    NumCreditLines: "",
    InterestRate: "",
    LoanTerm: "",
    DTIRatio: "",
    Education: "",
    EmploymentType: "",
    MaritalStatus: "",
    LoanPurpose: "",
    HasMortgage: "",
    HasDependents: "",
    HasCoSigner: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setuserData((prev) => ({ ...prev, [name]: checked ? "Yes" : "No" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoaderText("Processing Prediction Results");
    try {
      // Normalize checkbox values to 'Yes' or 'No'
      const normalizedData = {
        ...userData,
        HasMortgage: userData.HasMortgage === "Yes" ? "Yes" : "No",
        HasDependents: userData.HasDependents === "Yes" ? "Yes" : "No",
        HasCoSigner: userData.HasCoSigner === "Yes" ? "Yes" : "No",
      };

      const predictionResult = await predictorService.getPrediction(
        normalizedData
      );
      console.log("Prediction Result:", predictionResult);
      setLoading(false);
      setLoaderText("");
      navigate("/PredictionResults", {
        state: { predictionResult: predictionResult.prediction , userData : userData },
      });
    } catch (error) {
      console.error("Prediction API error:", error);
      setLoading(false);
      setLoaderText("");
      alert("Failed to get prediction. Please try again.");
    }
  };

  useEffect(() => {
    
    setLoading(true);
    setLoaderText("Loading");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 
  
  return (
    <>
      {loading && (
        <div className="fixed z-10  w-[90%] h-screen backdrop-blur-sm">
          <div className="relative flex items-center justify-center w-full h-full left-20 -top-16"><Loader ring text={loaderText} /></div>
        </div>
      )}
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-5xl p-6 mx-auto border border-gray-700 rounded-lg shadow-lg bg-white/5 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <div className="p-2 mr-3 rounded-md bg-gray-700/50">
              <CreditCardIcon className="w-5 h-5 text-teal-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              Loan Details Form
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Personal Section */}
              <div>
                <div className="flex items-center mb-4">
                  <UserIcon className="w-4 h-4 mr-2 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-300">
                    Personal
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="UserName"
                      value={userData.UserName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Age
                    </label>
                    <input
                      type="number"
                      name="Age"
                      value={userData.Age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Education
                    </label>
                    <select
                      name="Education"
                      value={userData.Education}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                    >
                      <option value="">Select</option>
                      <option>High School</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Marital Status
                    </label>
                    <select
                      name="MaritalStatus"
                      value={userData.MaritalStatus}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                    >
                      <option value="">Select</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divorced</option>
                      <option>Widowed</option>
                    </select>
                  </div>
                </div>

                {/* Employment Section */}
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <BriefcaseIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-300">
                      Employment
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 text-sm text-gray-400">
                        Employment Type
                      </label>
                      <select
                        name="EmploymentType"
                        value={userData.EmploymentType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="">Select</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Self-employed</option>
                        <option>Unemployed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-400">
                        Months Employed
                      </label>
                      <input
                        type="number"
                        name="MonthsEmployed"
                        value={userData.MonthsEmployed}
                        onChange={handleChange}
                        placeholder="Enter months"
                        className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Other Info */}
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <BuildingIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-300">Other</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="HasCoSigner"
                        checked={userData.HasCoSigner}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-teal-500 bg-gray-800 border-gray-700 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-300">
                        Has Co-Signer
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="HasDependents"
                        checked={userData.HasDependents}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-teal-500 bg-gray-800 border-gray-700 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-300">
                        Has Dependents
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="HasMortgage"
                        checked={userData.HasMortgage}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-teal-500 bg-gray-800 border-gray-700 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-300">
                        Has Mortgage
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loan and Credit Section */}
              <div>
                <div className="flex items-center mb-4">
                  <CreditCardIcon className="w-4 h-4 mr-2 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-300">Loan</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Loan Amount
                    </label>
                    <input
                      type="number"
                      name="LoanAmount"
                      value={userData.LoanAmount}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      name="InterestRate"
                      value={userData.InterestRate}
                      onChange={handleChange}
                      placeholder="Enter rate"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Loan Term (months)
                    </label>
                    <input
                      type="number"
                      name="LoanTerm"
                      value={userData.LoanTerm}
                      onChange={handleChange}
                      placeholder="Enter term"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Loan Purpose
                    </label>
                    <select
                      name="LoanPurpose"
                      value={userData.LoanPurpose}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    >
                      <option value="">Select</option>
                      <option>Home</option>
                      <option>Education</option>
                      <option>Vehicle</option>
                      <option>Business</option>
                      <option>Personal</option>
                    </select>
                  </div>
                </div>

                {/* Credit Section */}
                <div className="mt-8 space-y-4">
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Income
                    </label>
                    <input
                      type="number"
                      name="Income"
                      value={userData.Income}
                      onChange={handleChange}
                      placeholder="Enter income"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Credit Score
                    </label>
                    <input
                      type="number"
                      name="CreditScore"
                      value={userData.CreditScore}
                      onChange={handleChange}
                      placeholder="Enter credit score"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      Number of Credit Lines
                    </label>
                    <input
                      type="number"
                      name="NumCreditLines"
                      value={userData.NumCreditLines}
                      onChange={handleChange}
                      placeholder="Enter number"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-400">
                      DTI Ratio
                    </label>
                    <input
                      type="number"
                      name="DTIRatio"
                      value={userData.DTIRatio}
                      onChange={handleChange}
                      placeholder="Enter DTI ratio"
                      className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8 space-x-4">
              <button
                type="button"
                className="px-6 py-2 font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600"
                onClick={() =>
                  setuserData({
                    Age: "",
                    Income: "",
                    LoanAmount: "",
                    CreditScore: "",
                    MonthsEmployed: "",
                    NumCreditLines: "",
                    InterestRate: "",
                    LoanTerm: "",
                    DTIRatio: "",
                    Education: "",
                    EmploymentType: "",
                    MaritalStatus: "",
                    LoanPurpose: "",
                    HasMortgage: false,
                    HasDependents: false,
                    HasCoSigner: false,
                  })
                }
              >
                CLEAR
              </button>
              <button
                type="submit"
                className="px-6 py-2 font-medium text-white bg-green-700 rounded-md hover:bg-green-600"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PredictorForm;
