
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UserIcon,
  BriefcaseIcon,
  CreditCardIcon,
  BuildingIcon,
} from 'lucide-react'

const PredictorForm = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/prediction')
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
        <div className="flex items-center mb-6">
          <div className="p-2 rounded-md bg-gray-700/50 mr-3">
            <CreditCardIcon className="h-5 w-5 text-teal-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">
            Loan Details Form
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information Section */}
            <div>
              <div className="flex items-center mb-4">
                <UserIcon className="h-4 w-4 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-300">Personal</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Education Status
                  </label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500">
                    <option>Education Status</option>
                    <option>High School</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Marital Status
                  </label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500">
                    <option>Marital Status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <h3 className="text-lg font-medium text-gray-300">
                    Employment
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Employment Type
                    </label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500">
                      <option>Employment Type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Self-employed</option>
                      <option>Unemployed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Months Employed
                    </label>
                    <input
                      type="number"
                      placeholder="Enter months employed"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <BuildingIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <h3 className="text-lg font-medium text-gray-300">Other</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cosigner"
                      className="h-4 w-4 bg-gray-800 border-gray-700 rounded focus:ring-teal-500 text-teal-500"
                    />
                    <label
                      htmlFor="cosigner"
                      className="ml-2 text-sm text-gray-300"
                    >
                      Has Co-Signer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="dependents"
                      className="h-4 w-4 bg-gray-800 border-gray-700 rounded focus:ring-teal-500 text-teal-500"
                    />
                    <label
                      htmlFor="dependents"
                      className="ml-2 text-sm text-gray-300"
                    >
                      Has Dependents
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="mortgage"
                      className="h-4 w-4 bg-gray-800 border-gray-700 rounded focus:ring-teal-500 text-teal-500"
                    />
                    <label
                      htmlFor="mortgage"
                      className="ml-2 text-sm text-gray-300"
                    >
                      Has Mortgage
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Loan and Credit Information Section */}
            <div>
              <div className="flex items-center mb-4">
                <CreditCardIcon className="h-4 w-4 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-300">Loan</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    placeholder="Enter loan amount"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter interest rate"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Loan Term (months)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter loan term"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Loan Purpose
                  </label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500">
                    <option>Loan Purpose</option>
                    <option>Home</option>
                    <option>Education</option>
                    <option>Vehicle</option>
                    <option>Business</option>
                    <option>Personal</option>
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <CreditCardIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <h3 className="text-lg font-medium text-gray-300">
                    Credit Status
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Income
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your income"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Credit Score
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your credit score"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Number of Credit Lines
                    </label>
                    <input
                      type="number"
                      placeholder="Enter number of credit lines"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Debt-to-Income Ratio
                    </label>
                    <input
                      type="number"
                      placeholder="Enter DTI ratio"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-medium transition-colors"
            >
              CLEAR
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md font-medium transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}



export default PredictorForm
