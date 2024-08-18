// src/components/MortgageCalculatorForm.tsx
import React, { useState } from "react";
import FormSide from "./formside";
import Completed from "./completed";

const Form: React.FC = () => {
  const [mortgageAmount, setMortgageAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [mortgageTerm, setMortgageTerm] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedType1, setSelectedType1] = useState<string>();
  const [showFormSide, setShowFormSide] = useState(false);

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
  
  const totalRepayment = monthlyPayment !== null ? monthlyPayment * (mortgageTerm * 12) : null;

  const handleClearAll = () => {
    setMortgageAmount(0);
    setMortgageTerm(0);
    setInterestRate(0);
    setMonthlyPayment(0);
    setSelectedType('');
    setSelectedType1('');
  };

  const toggleVisibility = () => {
    setShowFormSide(!showFormSide);
  };


  return (
    <>
    <div className="space-y-5">
      <div className="md:-mt-16 md:mb-10 sm:-mt-5 ">
            <button onClick={handleClearAll} className="md:ml-[360px] sm:ml-12">
              <span className="underline font-medium text-Slate-300 hover:text-Slate-900"> Clear All </span>
            </button>
      </div>

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
            placeholder="0"
            value={mortgageAmount}
            className="border-2 md:w-96  sm:w-80 h-10 rounded-md pl-16 hover:border-Slate-900"
            onChange={(e) => setMortgageAmount(parseFloat(e.target.value))}
          />
        </div>
      </div>

      {/* Mortgage Term & Interest Rate */}
      <div className="md:flex md:space-x-7 ml-10 space-y-3 md:space-y-0">
        <div className=" space-y-2">
          <div className="">
            <h3 className="text-Slate-300 font-semibold">Mortgage Term</h3>
          </div>

          <div className="">
            <input
              type="number"
              placeholder="0"
              value={mortgageTerm}
              className="border-2 h-10 rounded-md pl-3 hover:border-Slate-900 sm:w-80 md:w-48"
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
             placeholder="0"
             value={interestRate}
             className="border-2 md:w-40 h-10 rounded-md pl-3 hover:border-Slate-900 sm:w-80"
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
          <div className="flex border-2 md:w-96 sm:w-80 h-10 rounded-md hover:border-Lime">
            <input
             type="radio"
             name="Mortgage Type"
             placeholder="0"
             value="radio1"
             className="w-9 h-5 ml-5 mt-2.5"
             checked={selectedType === 'radio1'}
             onChange={e=>setSelectedType(e.target.value)}
            />
            <span className=" text-Slate-900 font-semibold mt-2 ml-2">Repayment</span>
          </div>

          <div className="flex border-2 md:w-96 sm:w-80 h-10 rounded-md hover:border-Lime">
            <input
             type="radio"
             name="Mortgage Type"
             placeholder="0"
             value="radio2"
             checked={selectedType1 === 'radio2'}
             className="w-9 h-5 ml-5 mt-2.5"
             onChange={e=>setSelectedType1(e.target.value)}
            />
            <span className="text-Slate-900 font-semibold mt-2 ml-2">Interest Only</span>
          </div>
        </div>
      </div>

      <button onClick={calculateMonthlyPayment} className="md:ml-10 ml-10 border-2 md:w-72 w-80 h-14 rounded-3xl bg-Lime hover:bg-Limegb">
        <div onClick={toggleVisibility}>
          <div className="flex space-x-3 md:ml-12 ml-14">
            <img src="/src/assets/icon-calculator.png" alt="" className="" />
            <span className="font-bold text-Slate-900">Calculate Repayments</span>
          </div>
        </div>
      </button>


    </div>
       {/* the results */}
      <div className="md:w-[500px] sm:w-[400px] md:ml-5 md:-mt-[108px] h-[520px] md:rounded-r-3xl md:rounded-bl-[70px] bg-Slate-900 -ml-3 mt-8 ">
        {showFormSide ? null :
        <div className="p-1">
          <FormSide />
        </div>
        }
        
       <div className=" w-[500px]">
         {monthlyPayment !== null && (
         <div className="">
           <Completed />
          <div className="md:ml-[40px] md:w-[420px] sm:w-80 sm:ml-14 bg-Background h-56 rounded-lg border-t-Lime border-t-4">
            <div className="sm:-ml-5 md:ml-0">
              <div className="p-5 ml-5">
               <span className="text-Slate-500 font-medium">
                 Your monthly repayments
               </span>
              </div>
              <div className="ml-10 -mt-3">
                <p className="text-5xl font-extrabold text-Lime"> €{monthlyPayment.toFixed(2)}</p>
              </div>
            </div>
              <hr className="md:w-80 md:ml-10 sm:w-72 sm:ml-5 mt-5 bg-Slate-300"/>
            <div className="sm:-ml-5 md:ml-0">
               <div className="p-5 ml-5">
                <span className="text-Slate-500 font-medium">
                  Your monthly repayments
                </span>
               </div>
               <div className="ml-10 -mt-3">
                 <p className="text-White text-2xl font-semibold"> €{totalRepayment?.toFixed(2) || "N/A"}</p>
               </div>
            </div>
          </div>
         </div>
         )}
       </div>
      </div>
    </>
  );
};

export default Form;


