import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { FileTextIcon, AlertCircleIcon, ArrowLeftIcon } from "lucide-react";
import OpenAI from "openai";
import Loader from "../components/Loader";
import { Skeleton } from "@mui/material";

// Chart Colors
const COLORS = ["#3b82f6", "#f87171"];

// Utility to extract sections from AI response
function parseAIResponse(content) {
  const insights = [];
  const recommendations = [];
  const riskFactors = [];

  const insightRegex = /⚠️\s*(.+)/g;
  const recommendationRegex = /- (?!.*Risk).*?(.+)/g;
  const riskFactorRegex = /- (.+?): (.+?) \((\d+)%\)/g;

  let match;
  while ((match = insightRegex.exec(content)) !== null) {
    insights.push(match[1].replace(/\*\*/g, "").trim());
  }

  while ((match = recommendationRegex.exec(content)) !== null) {
    recommendations.push(match[1].replace(/\*\*/g, "").trim());
  }

  while ((match = riskFactorRegex.exec(content)) !== null) {
    const levelText = match[2];
    let tailwindColor = "green";
    if (levelText.includes("Extreme")) tailwindColor = "red";
    else if (levelText.includes("Critical")) tailwindColor = "red";
    else if (levelText.includes("High")) tailwindColor = "amber";
    else if (levelText.includes("Medium")) tailwindColor = "yellow";

    riskFactors.push({
      label: match[1].replace(/\*\*/g, "").trim(),
      level: levelText,
      percentage: `${match[3]}%`,
      color: tailwindColor,
    });
  }

  return { insights, recommendations, riskFactors };
}

const PredictionResults = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey:
      "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",
    dangerouslyAllowBrowser: true,
  });

  const [data, setData] = useState([
    { name: "Not Default", value: 0 },
    { name: "Default", value: 0 },
  ]);
  const [insights, setInsights] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [riskFactors, setRiskFactors] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [prob, setProb] = useState(null);

  const { predictionResult, userData } = location.state || {};
  const isDefault = predictionResult?.prediction_class === "Defalt";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchAIInsights = async () => {
    try {
      setLoading(true);
      const userInfo = `
          User Details:
          Name: ${userData?.UserName}
          Age: ${userData?.Age}
          Income: ${userData?.Income}
          Loan Amount: ${userData?.LoanAmount}
          Credit Score: ${userData?.CreditScore}
          Debt-to-Income Ratio: ${userData?.DTIRatio}
          Employment Duration: ${userData?.MonthsEmployed} months
          Employment Type: ${userData?.EmploymentType}
          Marital Status: ${userData?.MaritalStatus}
          Has Co-Signer: ${userData?.HasCoSigner}
        `;

      const prompt = `
  Loan Prediction Output: ${isDefault ? "Default" : "Not Default"}.
  ${userInfo}
  
  Provide a detailed risk assessment. Follow this format only:
  
  ### Risk Insights:
  ⚠️ Insight 1  
  ⚠️ Insight 2  
  ⚠️ Insight 3  
  
  ### Recommendations:
  - Recommendation 1  
  - Recommendation 2  
  - Recommendation 3

### Risk Factors:
  - <Factor Name>: <Risk Level> (<Percentage>%)
  Example:
  - Credit Score: High Risk (80%)
  - Debt-to-Income Ratio: Medium Risk (60%)
  - Employment History: Low Risk (40%)
`;

      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [{ role: "user", content: prompt }],
      });

      const response = completion.choices[0].message.content;
      const { insights, recommendations, riskFactors } =
        parseAIResponse(response);

      setInsights(insights);
      setRecommendations(recommendations);
      setRiskFactors(riskFactors);
      setLoading(false);
    } catch (error) {
      console.error("AI Error:", error);
    }
  };

  // Get AI Suggestions on Page Load
  useEffect(() => {
    if (predictionResult) {
      const { prediction_probability } = predictionResult;

      const notDefaultProbability = isDefault
        ? prediction_probability * 100
        : (1 - prediction_probability) * 100;
      const defaultProbability = 100 - notDefaultProbability;

      setData([
        { name: "Not Default", value: notDefaultProbability },
        { name: "Default", value: defaultProbability },
      ]);
      setProb(prediction_probability);

      fetchAIInsights();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [predictionResult]);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-5xl mx-auto border border-gray-700 rounded-lg shadow-lg bg-white/5 backdrop-blur-sm">
        <div className="flex items-center p-6 border-b border-gray-700">
          <div className="p-2 mr-3 rounded-md bg-gray-700/50">
            <FileTextIcon className="w-5 h-5 text-teal-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">
            Prediction Result
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          <div className="space-y-6">
            {/* Default/Not Default Summary */}
            <div className="p-6 text-center rounded-lg bg-gray-800/50">
              <div className="mb-2 text-xl font-bold text-red-400">
                {predictionResult.prediction_class}
              </div>
              <p className="text-gray-300">
                {isDefault
                  ? "There is a high chance that the loan will not be repaid."
                  : "The applicant is likely to repay the loan on time."}
              </p>
            </div>

            {/* Probability Pie Chart */}
            <div className="p-6 rounded-lg bg-gray-800/50">
              <h3 className="mb-6 text-lg font-medium text-center">
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

          {/* AI Feedback Section */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <h3 className="mb-4 text-lg font-medium">
                Here is what expertise AI recommends:
              </h3>
              <div className="space-y-4">
                {loading ? (
                  <>
                    <Skeleton variant="rounded" width={430} height={50} />
                    <Skeleton variant="rounded" width={430} height={50} />
                    <Skeleton variant="rounded" width={430} height={50} />
                  </>
                ) : (
                  <>
                    {insights.map((text, i) => (
                      <div key={i} className="flex items-start">
                        <AlertCircleIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{text}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="pt-4 mt-6 border-t border-gray-700">
                <h4 className="mb-2 font-medium">Recommendations:</h4>
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton variant="rounded" width={430} height={50} />
                    <Skeleton variant="rounded" width={430} height={50} />
                    <Skeleton variant="rounded" width={430} height={50} />
                  </div>
                ) : (
                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    {recommendations.map((text, i) => (
                      <li key={i}>{text}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Risk Factor Bars (Static UI - optional to make dynamic) */}
            <div className="p-6 rounded-lg bg-gray-800/50">
              <h3 className="mb-4 text-lg font-medium">Risk Factors:</h3>
              <div className="space-y-3">
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton variant="rounded" width={430} height={20} />
                    <Skeleton variant="rounded" width={430} height={20} />
                    <Skeleton variant="rounded" width={430} height={20} />
                    <Skeleton variant="rounded" width={430} height={20} />
                    <Skeleton variant="rounded" width={430} height={20} />
                  </div>
                ) : (
                  <>
                    {riskFactors.map((rf, i) => (
                      <RiskBar
                        key={i}
                        label={rf.label}
                        level={rf.level}
                        color={rf.color}
                        width={rf.percentage}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-6 border-t border-gray-700">
          <Link
            to="/form"
            className="flex items-center text-teal-400 hover:text-teal-300"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1" />
            Back to Form
          </Link>
          <Link
            to="/"
            className="px-4 py-2 font-medium text-white bg-teal-500 rounded hover:bg-teal-600"
          >
            Start New Analysis
          </Link>
        </div>
      </div>
    </div>
  );
};

const RiskBar = ({ label, level, color, width }) => {
  const textColor = `text-${color}-400`;
  const barColor = `bg-${color}-500`;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-400">{label}</span>
        <span className={`text-sm ${textColor}`}>{level}</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full">
        <div
          className={`h-full ${barColor} rounded-full`}
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

export default PredictionResults;
