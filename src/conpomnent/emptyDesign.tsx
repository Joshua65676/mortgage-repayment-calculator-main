import Form from "./form"

const EmptyDesign = () => {

  return (
    <div className="flex">
      <div className="bg-White md:w-5/12 sm:-ml-9 md:mt-10 md:h-max md:rounded-3xl md:ml-52 -mt-7 sm:h-[700px] sm:w-[390px]">
        <div className=" p-10 -mb-1 sm:-ml-3 md:ml-0">
            <h1 className="text-xl font-bold text-Slate-900">Mortgage Calculator</h1>
        </div>
        <div className="p-10 md:-ml-10 -mt-10 md:h-[450px] sm:h-96 md:flex -ml-14">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default EmptyDesign
