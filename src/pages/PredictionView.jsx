import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { Divider } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import OpenAI from "openai";
import { extractLoanAdvice } from "../utils/utilmethods";

Chart.register(...registerables, ChartDataLabels);

const PredictionView = () => {
  const [defaultS, setDefaultS] = useState(true);
  const [prob, setProb] = useState(0.4);
  const [aires, setAires] = useState([]);

  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey:
      "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",
    dangerouslyAllowBrowser: true,
  });

  const data = {
    labels: ["Not Default", "Default"],
    datasets: [
      {
        data: [1 - prob, prob],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      datalabels: {
        formatter: (value) => `${(value * 100).toFixed(1)}%`,
        color: "#fff",
        font: {
          size: 14,
          weight: "bold",
        },
        textAlign: "center",
        textShadow: "0px 0px 3px rgba(0,0,0,0.5)",
      },
    },
  };

  // ✅ Gradually load text like GPT
  const loadTextGradually = (adviceList) => {
    setAires([]); // Reset previous advice
    adviceList.forEach((advice, index) => {
      let currentText = "";
      let i = 0;

      const interval = setInterval(() => {
        if (i < advice.length) {
          currentText += advice[i];
          setAires((prev) => {
            const updated = [...prev];
            updated[index] = currentText; // ✅ Ensure it's a string, not a function
            return updated;
          });
          i++;
        } else {
          clearInterval(interval);
        }
      }, 20); // Speed of text loading
    });
  };

  // ✅ Get AI response
  async function getAiRes() {
    try {
      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "user",
            content: `Loan default predictor result says that loan is ${
              defaultS ? "Default" : "Not Default"
            }. If default, assist them on how to improve to get a loan. If not default, suggest good loan repayment practices. Provide the answer in five list items only in this format:

### **If Predicted as Default:**  
1. **title** – description.  
2. **title** – description.  
3. **title** – description.  
4. **title** – description.  
5. **title** – description.  

### **If Not Default:**  
1. **title** – description.  
2. **title** – description.  
3. **title** – description.  
4. **title** – description.  
5. **title** – description.  
`,
          },
        ],
      });

      const { defaultAdvice, nonDefaultAdvice } = extractLoanAdvice(
        completion.choices[0].message.content
      );

      const adviceList = defaultS ? defaultAdvice : nonDefaultAdvice;
      loadTextGradually(adviceList);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  }

  useEffect(() => {
    getAiRes();
  }, []);

  return (
    <>
      <Header />
      <div className="relative w-[89%] h-full bg-white text-black justify-self-center shadow-lg pt-2 pb-1 px-8 mt-2 rounded-lg">
        <div className="flex items-center gap-4 mb-2">
          <ChecklistIcon />
          <h2 className="font-semibold text-lg">Prediction Result</h2>
        </div>
        <Divider className="w-full" />

        <div className="flex gap-8 my-2">
          {/* Left Side */}
          <div className="flex flex-1 flex-col">
            <div className="w-full mr-5 h-20 my-2 pt-2 bg-zinc-100 rounded-md shadow-md flex flex-col gap-1">
              {defaultS ? (
                <>
                  <span className="text-red-500 font-semibold text-center text-lg">
                    Default
                  </span>
                  <p className="text-slate-500 text-center">
                    There is a high chance that the loan will not be repaid.
                  </p>
                </>
              ) : (
                <>
                  <span className="text-blue-500 font-semibold text-center text-lg">
                    Not Default
                  </span>
                  <p className="text-slate-500 text-center">
                    There is no risk in granting the loan.
                  </p>
                </>
              )}
            </div>
            <div className="w-full mr-5 h-[66vh] mt-2 mb-1 pt-2 bg-zinc-100 rounded-md shadow-md flex flex-col gap-1">
              <span className="font-semibold text-base text-slate-800 text-center">
                Prediction Probability
              </span>
              <div className="w-full h-full flex justify-center">
                <Pie
                  data={data}
                  options={options}
                  width={500}
                  height={500}
                  style={{ width: "400px", height: "400px" }}
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-1 flex-col">
            <span className="font-semibold text-base text-slate-800">
              Here is what expertise AI recommends:
            </span>
            <div className="w-full mr-5 h-[76vh] my-2 pt-10 px-4 bg-zinc-100 rounded-md shadow-md flex flex-col">
              {aires.map((item, index) => {
                if (!item) return null; // ✅ Handle empty cases gracefully
                const [title, description] = item.split(" – ");
                return (
                  <p
                    key={index}
                    className="relative w-full h-full text-justify font-normal"
                  >
                    <strong>{title} –</strong> {description}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PredictionView;
