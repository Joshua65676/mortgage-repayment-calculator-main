
const Completed = () => {
  return (
    <div className="p-10 space-y-10">
      <div className="space-y-5">
        <h2 className="text-White font-bold text-2xl">
           Your results
        </h2>
        <p className="text-Slate-500 font-bold">
          Your results are shown below based on the information you provided.
          To adjust the results, edit the form and click “calculate repayments” again.
        </p>
      </div>
          {/* Your results */}
      <div className="bg-Background h-56 rounded-lg border-t-Lime border-t-4">
          {/* Your monthly repayments */}
        <div className="">
            <div className="p-8">
             <span className="text-Slate-500 font-medium">
               Your monthly repayments
             </span>
            </div>
            <div className="">
              {/* {monthlyPayment !== null && <p>Monthly Payment: €{monthlyPayment}</p>} */}
            </div>
        </div>
          {/* Total you'll repay over the term */}
        
      </div>
    </div>
  )
}

export default Completed
