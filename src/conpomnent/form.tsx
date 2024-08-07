// src/components/MortgageCalculatorForm.tsx
import React, { useState } from "react";

const Form: React.FC = () => {
  const [mortgageAmount, setMortgageAmount] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [mortgageTerm, setMortgageTerm] = useState<number>();
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMonthlyPayment = () => {
    // Implement your calculation logic here
    // For simplicity, let's assume monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = mortgageTerm * 12;
    const numerator = mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
    const calculatedMonthlyPayment = numerator / denominator;

    setMonthlyPayment(calculatedMonthlyPayment);
  };

  return (
    <div className="space-y-5">
        {/* Mortgage Amount */}
      <div className="ml-10 space-y-2">
        <div className="">
          <h3 className="text-Slate-300 font-semibold">Mortgage Amount</h3>
        </div>

        <div className="">
          <span className=" text-gray-500 absolute bg-Slate-100 w-12 h-9 mt-[1.8px] ml-[1.5px] rounded-l-md">
            <p className="text-center mt-2 text-Slate-500 font-semibold">€</p>
          </span>
          <input
            type="number"
            placeholder=""
            value={mortgageAmount}
            className="border-2 w-96 h-10 rounded-md pl-16"
            onChange={(e) => setMortgageAmount(parseFloat(e.target.value))}
          />
        </div>
      </div>

      {/* Mortgage Term & Interest Rate */}
      <div className="flex space-x-7 ml-10">
        <div className=" space-y-2">
          <div className="">
            <h3 className="text-Slate-300 font-semibold">Mortgage Term</h3>
          </div>

          <div className="">
            <input
              type="number"
              placeholder=""
              value={mortgageTerm}
              className="border-2 h-10 rounded-md pl-3"
              onChange={(e) => setMortgageTerm(parseFloat(e.target.value))}
            />
            <span className=" text-gray-500 absolute bg-Slate-100 w-14 h-9 rounded-r-md -ml-[58px] mt-[1.5px]">
             <p className="mt-2 text-center text-Slate-500 font-semibold">Years</p>
            </span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className=" space-y-2">
         <div className="">
           <h3 className="font-semibold text-Slate-300">Interest Rate</h3>
         </div>

         <div className="">
           <input
             type="number"
             placeholder=""
             value={interestRate}
             className="border-2 w-40 h-10 rounded-md pl-3"
             onChange={(e) => setInterestRate(parseFloat(e.target.value))}
           />
           <span className=" text-gray-500 absolute bg-Slate-100 w-12 h-9 rounded-r-md -ml-[50px] mt-[1.5px]">
            <p className="mt-2 text-center font-semibold text-Slate-500">%</p>
           </span>
         </div>
        </div>
      </div>

      {/* Mortgage Type */}
      <div className="ml-10 space-y-2">
        <div className="">
          <h3 className="font-semibold text-Slate-300">Mortgage Type</h3>
        </div>

        <div className="space-y-2">
          <div className="">
            <input
             type=""
             placeholder="Repayment"
             value={interestRate}
             className="border-2 w-96 h-10 rounded-md"
             onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
          </div>

          <div className="">
            <input
             type=""
             placeholder="Interest Only"
             value={interestRate}
             className="border-2 w-96 h-10 rounded-md"
             onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>

      <button onClick={calculateMonthlyPayment} className="ml-10 border-2 w-72 h-14 rounded-3xl bg-Lime">
        <div className="flex space-x-3 ml-12">
            <img src="/src/assets/images/icon-calculator.svg" alt="" className="" />
            <span className="font-bold text-Slate-900">Calculate Repayments</span>
        </div>
      </button>

      {monthlyPayment !== null && <p>Monthly Payment: €{monthlyPayment.toFixed(2)}</p>}
    </div>
  );
};

export default Form;



















// const Form = () => {
//   return (
//     <>
//     <form id="loanForm">
//         <label for="amount">Loan Amount:</label>
//         <input type="number" id="amount" placeholder="Enter loan amount" required />

//         <label for="rate">Interest Rate (% per annum):</label>
//         <input type="number" id="rate" placeholder="Enter interest rate" required />

//         <label for="months">Loan Tenure (months):</label>
//         <input type="number" id="months" placeholder="Enter loan tenure" required />

//         <button type="button">Calculate EMI</button>
//     </form>
//     </>
//   )
// }

// export default Form
