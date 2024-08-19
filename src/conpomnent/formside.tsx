import  Illustration  from "../assets/illustration-empty.png"

const FormSide = () => {
  return (
    <div className="">
      <div className="text-center mt-28 space-y-4 sm:-ml-16 md:ml-0">
        <div className="md:ml-36 sm:ml-44">
            <img src={Illustration} alt="" className="" />
        </div>
        <div className="sm:ml-20 md:ml-0">
            <h1 className="text-White text-2xl font-semibold">Results shown here</h1>
        </div>
        <div className="sm:ml-24 md:ml-0">
            <p className="text-Slate-500 font-semibold md:w-96 sm:w-80 md:ml-14 mb-28">
              Complete the form and click “calculate repayments” to see what your monthly repayments would be.
            </p>
        </div>
      </div>
    </div>
  )
}

export default FormSide
