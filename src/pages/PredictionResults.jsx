import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { FileTextIcon, AlertCircleIcon, ArrowLeftIcon } from 'lucide-react'
// Data for the pie chart
const data = [
  {
    name: 'Not Default',
    value: 60,
  },
  {
    name: 'Default',
    value: 40,
  },
]
// Colors for the pie chart
const COLORS = ['#3b82f6', '#f87171']
const PredictionResults=()=> {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700">
        <div className="flex items-center p-6 border-b border-gray-700">
          <div className="p-2 rounded-md bg-gray-700/50 mr-3">
            <FileTextIcon className="h-5 w-5 text-teal-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">
            Prediction Result
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="text-center mb-4">
                <span className="text-red-400 font-bold text-xl">Default</span>
              </div>
              <p className="text-gray-300 text-center">
                There is a high chance that the loan will not be repaid.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-center text-lg font-medium mb-6">
                Prediction Probability
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(1)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">
                Here is what expertise AI recommends:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircleIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    The applicant's debt-to-income ratio is too high, indicating
                    potential repayment difficulties.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircleIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    Credit score falls below the recommended threshold for this
                    loan amount.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircleIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    Employment history shows instability which increases default
                    risk.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h4 className="font-medium mb-2">Recommendations:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Consider requesting a co-signer to mitigate risk</li>
                  <li>Offer a smaller loan amount with shorter term</li>
                  <li>Require additional collateral to secure the loan</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Risk Factors:</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Credit Score</span>
                    <span className="text-sm text-red-400">High Risk</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{
                        width: '80%',
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">
                      Debt-to-Income
                    </span>
                    <span className="text-sm text-red-400">High Risk</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{
                        width: '75%',
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">
                      Employment History
                    </span>
                    <span className="text-sm text-yellow-400">Medium Risk</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-yellow-500 rounded-full"
                      style={{
                        width: '60%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-700 flex justify-between">
          <Link
            to="/form"
            className="flex items-center text-teal-400 hover:text-teal-300"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Form
          </Link>
          <Link
            to="/"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded font-medium"
          >
            Start New Analysis
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PredictionResults;